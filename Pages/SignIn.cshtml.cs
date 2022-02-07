using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;

namespace FoodEaterRecipes.Pages
{
    public class SignInModel : PageModel
    {
        private readonly ILogger<SignInModel> _logger;

        public SignInModel(ILogger<SignInModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {

        }
    }
}
