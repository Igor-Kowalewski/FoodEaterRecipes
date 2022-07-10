using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using FoodEaterRecipes.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using FoodEaterRecipes.Data.Entities;

namespace FoodEaterRecipes.Controllers
{
    public class AccountController : Controller
    {
        private readonly ILogger<AccountController> _logger;
        private readonly SignInManager<User> _signInManager;

        public AccountController(ILogger<AccountController> logger, SignInManager<User> signInManager)
        {
            _logger = logger;
            _signInManager = signInManager;
        }

        public IActionResult Login()
        {
            if(this.User.Identity.IsAuthenticated)
            {
                return RedirectToAction("Index", "App");
            }

            return View();
        }
        
        [HttpPost]
        public async Task<IActionResult> Login(LoginDTO dto)
        {
            if (ModelState.IsValid)
            {
                var result = await _signInManager.PasswordSignInAsync(dto.Username, 
                    dto.Password,
                    dto.RememberMe,
                    false);

                if(result.Succeeded)
                {
                    if(Request.Query.Keys.Contains("ReturnUrl")) 
                    {
                        return Redirect(Request.Query["ReturnUrl"].First()); /// POWRÓT NP. Z WIDOKU CREATE
                    }
                    else
                    {
                        return RedirectToAction("Index","App"); // PRZY NORMALNYM WEJŚCIU DO LOGOWANIA Z WIDOKU INDEX
                    }
                }
            }

            ModelState.AddModelError("", "Failed to login");

            return View();
        }

        [HttpGet]
        public async Task<IActionResult> Logout()
        {
            await _signInManager.SignOutAsync();
            return RedirectToAction("Index", "App");
        }
    }
}
