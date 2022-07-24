using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using FoodEaterRecipes.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using FoodEaterRecipes.Data.Entities;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using Microsoft.Extensions.Configuration;
using System.Text;

namespace FoodEaterRecipes.Controllers
{
    public class AccountController : Controller
    {
        private readonly ILogger<AccountController> _logger;
        private readonly SignInManager<User> _signInManager;
        private readonly UserManager<User> _userManager;
        private readonly IConfiguration _config;

        public AccountController(ILogger<AccountController> logger, 
            SignInManager<User> signInManager,
            UserManager<User> userManager,
            IConfiguration config)
        {
            _logger = logger;
            _signInManager = signInManager;
            _userManager = userManager;
            _config = config;
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
                

                if (result.Succeeded)
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


        [HttpPost]
        public async Task<IActionResult> CreateToken([FromBody] LoginDTO dto)
        {
            if (ModelState.IsValid)
            {
                var user = await _userManager.FindByNameAsync(dto.Username);

                var result = await _signInManager.CheckPasswordSignInAsync(user,
                    dto.Password,
                    false);

                if (result.Succeeded)
                {
                    // Create JWT token
                    var claims = new[]
                    {
                        new Claim(JwtRegisteredClaimNames.Sub, user.Email),
                        new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                        new Claim(JwtRegisteredClaimNames.UniqueName, user.UserName)
                    };

                    var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Tokens:Key"]));
                    var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                    var token = new JwtSecurityToken(
                        _config["Tokens:Issuer"],
                        _config["Tokens:Audience"],
                        claims,
                        signingCredentials: creds,
                        expires: DateTime.UtcNow.AddMinutes(20));

                    return Created("", new { 
                        token = new JwtSecurityTokenHandler().WriteToken(token),
                        expiration = token.ValidTo
                    });
                }
            }

            return BadRequest();
        }
    }
}
