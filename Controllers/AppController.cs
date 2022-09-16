using FoodEaterRecipes.Data;
using FoodEaterRecipes.Data.Entities;
using FoodEaterRecipes.Models;
using FoodEaterRecipes.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using PagedList;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
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

        public AppController(IMailService mailService, IFoodEaterRepository repository, IWebHostEnvironment environment)
        {
            _mailService = mailService;
            _repository = repository;
            _environment = environment;
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
                int pageSize = 6;
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
            Recipe response = _repository.GetRecipeByName(Name);
            if (response != null)
            {
                //ViewBag.SearchResultRecipe = _repository.GetRecipeByName(Name);
                ViewBag.AbsolutePath = _environment.WebRootPath + $"\\src\\";

                return View(response);
            }

            return RedirectToPage("/Error");
        }


        [HttpGet("Recipe/{id}")]
        public IActionResult Recipe(int id)
        {
            Recipe response = _repository.GetRecipeById(id);
            if (response != null)
            {
                //ViewBag.SearchResultRecipe = _repository.GetRecipeById(id);
                ViewBag.AbsolutePath = _environment.WebRootPath + $"\\src\\";
                return View(response);
            }

            return RedirectToPage("/Error");
        }


        [HttpGet("Create")]
        //[Authorize(AuthenticationSchemes = "Bearer")]
        [Authorize(AuthenticationSchemes = "Identity.Application," + JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult Create()
        {  
            return View();
        }


        [HttpPost("Create")]
        //[Authorize(AuthenticationSchemes = "Bearer")]
        [Authorize(AuthenticationSchemes = "Identity.Application," + JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult OnCreatePostAsync()
        {
            //if (!ModelState.IsValid)
            //{
            //    return View();
            //}

            //_context.Recipes.Add(recipe);
            //await _context.SaveChangesAsync();

            int id = 1;
            return View("Index", id);
            //return View("Recipe", id);
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
                string fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
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
