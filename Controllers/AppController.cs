using FoodEaterRecipes.Data;
using FoodEaterRecipes.Data.Entities;
using FoodEaterRecipes.Models;
using FoodEaterRecipes.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
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

        [HttpGet("Recipes")]
        public IActionResult Recipes()
        {
            //ViewData["Recipes"] = new SelectList(_repository.GetAllRecipes(), "Id", "Name");
            
            IEnumerable<Recipe> response = _repository.GetAllRecipes();
            if (response != null && response.GetEnumerator().MoveNext())
            {
                ViewBag.SearchResultRecipes = _repository.GetAllRecipes();
                ViewBag.AbsolutePath = _environment.WebRootPath + $"\\src\\";
            }

            return View();
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


        [HttpGet("Recipe/{id}")]
        public IActionResult Recipe(int id)
        {
            return View(id);
        }


        [Authorize]
        [HttpGet("Create")]
        public IActionResult Create()
        {  
            return View();
        }


        [Authorize]
        [HttpPost("Create")]
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
        public IActionResult Contact(ContactMessage contactMessage)
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


        [HttpGet("Sign")]
        public IActionResult SignIn()
        {
            return View();
        }


        [HttpGet("Privacy")]
        public IActionResult Privacy()
        {
            return View();
        }
    }
}
