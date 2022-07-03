using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using FoodEaterRecipes.Data;
using FoodEaterRecipes.Data.Entities;

namespace FoodEaterRecipes.Pages
{
    public class DetailsModel : PageModel
    {
        private readonly FoodEaterRecipes.Data.FoodEaterContext _context;

        public DetailsModel(FoodEaterRecipes.Data.FoodEaterContext context)
        {
            _context = context;
        }

        public Recipe Recipe { get; set; }

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            Recipe = await _context.Recipes
                .Include(r => r.User).FirstOrDefaultAsync(m => m.Id == id);

            if (Recipe == null)
            {
                return NotFound();
            }
            return Page();
        }
    }
}
