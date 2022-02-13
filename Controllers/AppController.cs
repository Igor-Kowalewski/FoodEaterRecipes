using FoodEaterRecipes.Data;
using FoodEaterRecipes.Models;
using FoodEaterRecipes.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FoodEaterRecipes.Controllers
{
    public class AppController : Controller
    {
        private readonly IMailService _mailService;
        private readonly FoodEaterContext _context;

        public AppController(IMailService mailService, FoodEaterContext context)
        {
            _mailService = mailService;
            _context = context;
        }

        public IActionResult Index()
        {
            return View();
        }


        [HttpGet("Recipes")]
        public IActionResult Recipes()
        {
            var results = _context.IngredientCategories
                .OrderBy( p => p.Id )
                .ToList();

            return View(results);
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
                    ,contactMessage.Subject
                    ,$"From: {contactMessage.Name} " +
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
