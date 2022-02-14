using FoodEaterRecipes.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FoodEaterRecipes.Data
{
    public class FoodEaterRepository : IFoodEaterRepository
    {
        private readonly FoodEaterContext _context;

        public FoodEaterRepository(FoodEaterContext context)
        {
            _context = context;
        }

        public IEnumerable<Recipe> GetAllRecipes()
        {
            return _context.Recipes
                            .OrderBy(r => r.Name)
                            .ToList();
        }

        public IEnumerable<Ingredient> GetIngredientsByCategory(string category)
        {
            var categoryId = _context.IngredientCategories
                                    .Where(ic => ic.Name == category);

            return _context.Ingredients
                            .Where(i => i.IngredientCategory == categoryId)
                            .OrderBy(i => i.Name)
                            .ToList();
        }

        public bool SaveAll()
        {
            return _context.SaveChanges() > 0;
        }
    }
}
