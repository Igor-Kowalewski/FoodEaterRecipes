using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FoodEaterRecipes.Controllers
{
    public class AppController : Controller
    {
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

        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("Privacy")]
        public IActionResult Privacy()
        {
            return View();
        }

        [HttpGet("Recipes")]
        public IActionResult Recipes()
        {
            return View();
        }

        [HttpGet("Sign")]
        public IActionResult SignIn()
        {
            return View();
        }
    }
}
