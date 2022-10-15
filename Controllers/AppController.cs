using FoodEaterRecipes.Data;
using FoodEaterRecipes.Data.Entities;
using FoodEaterRecipes.Models;
using FoodEaterRecipes.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using PagedList;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace FoodEaterRecipes.Controllers
{
    public class AppController : Controller
    {
        private readonly IMailService _mailService;
        private readonly IFoodEaterRepository _repository;
        private readonly IWebHostEnvironment _environment;
        private readonly UserManager<User> _userManager;


        public AppController(IMailService mailService, IFoodEaterRepository repository, IWebHostEnvironment environment, UserManager<User> userManager)
        {
            _mailService = mailService;
            _repository = repository;
            _environment = environment;
            _userManager = userManager;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("Recipes/{page?}")]
        public IActionResult Recipes(int? page)
        {
            //ViewData["Recipes"] = new SelectList(_repository.GetAllRecipes(), "Id", "Name");
            
            IEnumerable<Recipe> response = _repository.GetAllRecipes();
            if (response != null && response.GetEnumerator().MoveNext())
            {
                int pageSize = 8;
                page = page == null ? 1 : page; 
                int pageNumber = (int)(page == 0 ? 1 : page);

                if (pageNumber > Math.Ceiling((float)response.Count() / pageSize))
                    return RedirectToPage("/Error");

                ViewBag.TotalPages = Math.Ceiling((float)response.Count() / pageSize);
                ViewBag.ActualPage = pageNumber;
                ViewBag.SearchResultRecipes = response.ToPagedList(pageNumber, pageSize);
                ViewBag.AbsolutePath = _environment.WebRootPath + $"\\src\\";


                return View();
            }

            return RedirectToPage("/Error");
        }

        [HttpPost("Recipes")]
        public JsonResult Recipes(string Prefix)
        {
            return Json(_repository.SearchByNameSuggestions(Prefix));
        }


        [HttpGet("api/Ingredients")]
        public JsonResult Ingredients(string Prefix)
        {
            var APIrequestTask = GetIngridientsFromAPI(Prefix);
            APIrequestTask.Wait();
            List<IngredientCompositionDTO> ingredientList = APIrequestTask.Result;

            return Json(ingredientList);
        }


        // Zapytanie do api@nutritionix.com - darmowa subskrypcja do 1000 zapytań dziennie
        private static async Task<List<IngredientCompositionDTO>> GetIngridientsFromAPI(string Prefix)
        {
            List<IngredientCompositionDTO> response = new();
            IngredientDTO ResultList;
            string Baseurl = "https://trackapi.nutritionix.com/";

            using (HttpClient client = new())
            {
                //Passing service base url
                client.BaseAddress = new Uri(Baseurl);
                client.DefaultRequestHeaders.Clear();

                //Define request data format
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                client.DefaultRequestHeaders.Add("x-app-id", "551bc1ca");
                client.DefaultRequestHeaders.Add("x-app-key", "7e6ed04c9d8c38bc4b7052fbdecf188c");

                //Sending request to find web api REST service resource GetAllEmployees using HttpClient
                HttpResponseMessage Res = await client.GetAsync($"v2/search/instant?query={Prefix}&detailed=true&branded=false");

                //Checking the response is successful or not which is sent using HttpClient
                if (Res.IsSuccessStatusCode)
                {
                    //Storing the response details recieved from web api
                    var ResultResponse = Res.Content.ReadAsStringAsync().Result;

                    //Deserializing the response recieved from web api and storing into the Employee list
                    ResultList = JsonConvert.DeserializeObject<IngredientDTO>(ResultResponse);

                    // Dictionary (Carefull for serving weight - it is not 100g):
                    // 208 Kcal
                    // 205 Carbohydrates
                    // 204 Fats
                    // 203 Proteins
                    foreach (var c in ResultList.Common)
                    {
                        IngredientCompositionDTO ingredient = new();

                        foreach ( var n in c.Full_nutrients )
                        {
                            ingredient.Name = c.Food_name;

                            switch (n.Attr_id)
                            {
                                case 208:
                                    ingredient.Kcal = n.Value / c.Serving_weight_grams * 100;
                                    break;
                                case 205:
                                    ingredient.Carbs = n.Value / c.Serving_weight_grams * 100;
                                    break;
                                case 204:
                                    ingredient.Fats = n.Value / c.Serving_weight_grams * 100;
                                    break;
                                case 203:
                                    ingredient.Proteins = n.Value / c.Serving_weight_grams * 100;
                                    break;
                                default:
                                    break;
                            }
                        }

                        response.Add(ingredient);
                    }
                }
            }

            return response;
        }


        [HttpGet("Recipe")]
        public IActionResult Recipe(string Name)
        {
            Recipe recipe = _repository.GetRecipeByName(Name);
            if (recipe != null)
            {
                var ingredients = _repository.GetRecipeDetailsById(recipe.Id);
                ViewBag.Ingredients = ingredients;

                RecipeIngredientDTO summary = GetNutrientsSumFromIngredients(ingredients);
                ViewBag.Summary = summary;

                ViewBag.AbsolutePath = _environment.WebRootPath + $"\\src\\";

                return View(recipe);
            }

            return RedirectToPage("/Error");
        }


        [HttpGet("Recipe/{id}")]
        public IActionResult Recipe(int id)
        {
            Recipe recipe = _repository.GetRecipeById(id);
            if (recipe != null)
            {
                var ingredients = _repository.GetRecipeDetailsById(recipe.Id);
                ViewBag.Ingredients = ingredients;

                RecipeIngredientDTO summary = GetNutrientsSumFromIngredients(ingredients);
                ViewBag.Summary = summary;

                ViewBag.AbsolutePath = _environment.WebRootPath + $"\\src\\";

                return View(recipe);
            }

            return RedirectToPage("/Error");
        }

        private static RecipeIngredientDTO GetNutrientsSumFromIngredients(IQueryable<RecipeIngredientDTO> ingredients)
        {
            return new()
            {
                Name = "Total",
                Amount = Math.Round(ingredients.Sum(i => i.Amount), 2),
                Kcal = Math.Round(ingredients.Sum(i => i.Kcal), 2),
                Carbs = Math.Round(ingredients.Sum(i => i.Carbs), 2),
                Fats = Math.Round(ingredients.Sum(i => i.Fats), 2),
                Proteins = Math.Round(ingredients.Sum(i => i.Proteins), 2)
            };
        }

        [HttpGet("Create")]
        //[Authorize(AuthenticationSchemes = "Bearer")]
        [Authorize(AuthenticationSchemes = "Identity.Application," + JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult Create()
        {
            return View();
        }


        [Route("RandomGuid")]
        [HttpGet("RandomGuid")]
        [Authorize(AuthenticationSchemes = "Identity.Application," + JwtBearerDefaults.AuthenticationScheme)]
        public JsonResult Get()
        {
            return Json(Guid.NewGuid());
        }
        

        [HttpPost("Create")]
        //[Authorize(AuthenticationSchemes = "Bearer")]
        //[Authorize(AuthenticationSchemes = "Identity.Application," + JwtBearerDefaults.AuthenticationScheme)]
        public async Task<JsonResult> CreateRecipeAsync()
        {
            IFormCollection recipe = Request.Form;
            Guid RecipeGuid = new(recipe["RecipeGuid"].ToString());
            string RecipeName = recipe["RecipeName"].ToString();
            string RecipeDesc = recipe["RecipeDesc"].ToString();
            List<NewRecipeIngredientDTO> RecipeIngredients = JsonConvert.DeserializeObject<List<NewRecipeIngredientDTO>>(recipe["RecipeIngredients"]);


            // Dodawanie oraz pobieranie nowych składników
            // Uwaga!!! Jeśli elementy się powtarzają to zostawiamy pojedyncze pozycje [DISTINCT] !!!
            List<Ingredient> ingList = new();
            foreach (var item in RecipeIngredients)
            {
                Ingredient i = new()
                {
                    Name = item.Name,
                    Carbohydrates = Math.Round((decimal)item.Carbs * 100 / (decimal)item.Weight, 2),
                    Proteins = Math.Round((decimal)item.Proteins * 100 / (decimal)item.Weight, 2),
                    Fats = Math.Round((decimal)item.Fats * 100 / (decimal)item.Weight, 2),
                    UpdateDT = DateTime.Now,
                    CreateDT = DateTime.Now,
                    UserId = _userManager.GetUserId(User),
                    IngredientCategoryId = 2 /// common testowo
                };

                ingList.Add(i);
            }

            var distinctIngList = ingList
                .GroupBy(ingredient => new { ingredient.Name, ingredient.Carbohydrates, ingredient.Proteins, ingredient.Fats })
                .Select(grp => grp.First())
                .ToList();

            IEnumerable<Ingredient> ingredientsAdded = _repository.AddIngredients(distinctIngList);


            // Dodanie oraz pobranie nowego przepisu
            Recipe r = new()
            {
                Name = RecipeName,
                ImageFilename = RecipeGuid,
                Description = RecipeDesc,
                UpdateDT = DateTime.Now,
                CreateDT = DateTime.Now,
                UserId = _userManager.GetUserId(User),
                RecipeIngredient = null
            };
            var recipeAdded = _repository.AddRecipe(r);


            // Dodawanie RecipeIngredients
            List<RecipeIngredient> ri = new();
            foreach (var item in RecipeIngredients)
            {
                // Pobieranie ID nowego składnika dodanego do bazy
                var ingredientId = ingredientsAdded
                    .Where(x => x.Name == item.Name 
                        && x.Carbohydrates == Math.Round((decimal)item.Carbs * 100 / (decimal)item.Weight, 2)
                        && x.Proteins == Math.Round((decimal)item.Proteins * 100 / (decimal)item.Weight, 2)
                        && x.Fats == Math.Round((decimal)item.Fats * 100 / (decimal)item.Weight, 2))
                    .First().Id;


                // Dodawanie pozycji
                ri.Add(new RecipeIngredient()
                {
                    IngredientWeight = (int)item.Weight,
                    UpdateDT = DateTime.Now,
                    CreateDT = DateTime.Now,
                    RecipeId = recipeAdded.Id,
                    IngredientId = ingredientId
                });
            }
            var recipeIngredientAdded = _repository.AddRecipeIngredients(ri);


            if (recipeIngredientAdded.Any())
            {
                Response.StatusCode = (int)HttpStatusCode.OK;
                return Json("/Recipes");
            }
            else
            {
                Response.StatusCode = (int)HttpStatusCode.BadRequest;
                return Json("/Error");
            }
        }


        [HttpPost("api/src/upload")]
        [DisableRequestSizeLimit]
        public async Task<IActionResult> UploadFile()
        {
            if (!Request.Form.Files.Any())
                return BadRequest("No files found in the request");

            if (Request.Form.Files.Count > 1)
                return BadRequest("Cannot upload more than one file at a time");

            if (Request.Form.Files[0].Length <= 0)
                return BadRequest("Invalid file length, seems to be empty");

            try
            {
                string webRootPath = _environment.WebRootPath;
                string uploadsDir = Path.Combine(webRootPath, "src");

                // wwwroot/src/
                if (!Directory.Exists(uploadsDir))
                    Directory.CreateDirectory(uploadsDir);

                IFormFile file = Request.Form.Files[0];
                //string fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                string fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).Name.Trim('"');
                fileName += ".jpg";

                string fullPath = Path.Combine(uploadsDir, fileName);

                var buffer = 1024 * 1024;
                using var stream = new FileStream(fullPath, FileMode.Create, FileAccess.Write, FileShare.None, buffer, useAsync: false);
                await file.CopyToAsync(stream);
                await stream.FlushAsync();

                string location = $"src/{fileName}";

                var result = new
                {
                    message = "Upload successful",
                    url = location
                };

                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Upload failed: " + ex.Message);
            }
        }


        [HttpGet("About")]
        public IActionResult AboutUs()
        {
            return View();
        }


        [HttpGet("Contact")]
        public IActionResult Contact()
        {
            return View();
        }


        [HttpPost("Contact")]
        public IActionResult Contact(ContactMessageDTO contactMessage)
        {
            if (ModelState.IsValid)
            {
                // Valid POST
                _mailService.SendMessage("igor.kowalewski.ug@gmail.com"
                    , contactMessage.Subject
                    , $"From: {contactMessage.Name} " +
                     $"Email: {contactMessage.Email} " +
                     $"Message: {contactMessage.Message}");

                ViewBag.UserMessage = "Message Sent";
                ModelState.Clear();
            }

            return View();
        }


        [HttpGet("Privacy")]
        public IActionResult Privacy()
        {
            return View();
        }
    }
}
