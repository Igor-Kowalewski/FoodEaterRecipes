using FoodEaterRecipes.Data;
using FoodEaterRecipes.Models;
using FoodEaterRecipes.Services;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
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


        [HttpGet("Recipes")]
        public IActionResult Recipes()
        {
            ViewData["Recipes"] = new SelectList(_repository.GetAllRecipes(), "Id", "Name");
            ViewBag.SearchResultRecipes = _repository.GetAllRecipes();
            ViewBag.AbsolutePath = _environment.WebRootPath + $"\\src\\";

            return View();
        }


        [HttpPost("Recipes")]
        public JsonResult Recipes(string Prefix)
        {
            return Json(_repository.SearchByNameSuggestions(Prefix));
        }


        [HttpGet("Create")]
        public async Task<ActionResult> Create()
        {

            // WYŁĄCZAM TO LISTOWANIE PRZY URUCHAMIANIU FUNKCJONALNOSCI
            //string Baseurl = "https://trackapi.nutritionix.com/";
            //IngredientsSearchAPI ResultList = new();

            //using (HttpClient client = new())
            //{
            //    //Passing service base url
            //    client.BaseAddress = new Uri(Baseurl);
            //    client.DefaultRequestHeaders.Clear();

            //    //Define request data format
            //    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            //    client.DefaultRequestHeaders.Add("x-app-id", "551bc1ca");
            //    client.DefaultRequestHeaders.Add("x-app-key", "7e6ed04c9d8c38bc4b7052fbdecf188c");

            //    //Sending request to find web api REST service resource GetAllEmployees using HttpClient
            //    HttpResponseMessage Res = await client.GetAsync("v2/search/instant?query=white bean");

            //    //Checking the response is successful or not which is sent using HttpClient
            //    if (Res.IsSuccessStatusCode)
            //    {
            //        //Storing the response details recieved from web api
            //        var ResultResponse = Res.Content.ReadAsStringAsync().Result;

            //        //Deserializing the response recieved from web api and storing into the Employee list
            //        ResultList = JsonConvert.DeserializeObject<IngredientsSearchAPI>(ResultResponse);
            //        //returning the list to view

            //        return View(ResultList);
            //    }

            //}
            
            return View();
        }


        [HttpPost("Create")]
        public JsonResult Create(string Prefix)
        {

            var APIrequestTask = GetIngridientsFromAPI(Prefix);
            APIrequestTask.Wait();
            List<string> ingredientList = APIrequestTask.Result;

            return Json(ingredientList);
        }

        private async Task<List<string>> GetIngridientsFromAPI(string Prefix)
        {
            List<string> response = new();
            IngredientsSearchAPI ResultList = new IngredientsSearchAPI();
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
                HttpResponseMessage Res = await client.GetAsync($"v2/search/instant?query={Prefix}");

                //Checking the response is successful or not which is sent using HttpClient
                if (Res.IsSuccessStatusCode)
                {
                    //Storing the response details recieved from web api
                    var ResultResponse = Res.Content.ReadAsStringAsync().Result;

                    //Deserializing the response recieved from web api and storing into the Employee list
                    ResultList = JsonConvert.DeserializeObject<IngredientsSearchAPI>(ResultResponse);

                    foreach(var c in ResultList.Common)
                    {
                        response.Add(c.Food_name);
                    }
                }
            }

            return response;
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
