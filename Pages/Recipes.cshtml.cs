using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;

namespace FoodEaterRecipes.Pages
{
    public class RecipesModel : PageModel
    {
        private readonly ILogger<RecipesModel> _logger;

        public RecipesModel(ILogger<RecipesModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {

        }
    }
}
