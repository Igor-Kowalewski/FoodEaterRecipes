using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FoodEaterRecipes.Data.Entities
{
    public class Ingredient
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Carbohydrates { get; set; }
        public decimal Proteins { get; set; }
        public decimal Fats { get; set; }
        public DateTime UpdateDT { get; set; }
        public DateTime CreateDT { get; set; }
        public User User { get; set; }                                      // Required FK in Ingredient
        public IngredientCategory IngredientCategory { get; set; }          // Required FK in Ingredient
        public ICollection<RecipeIngredient> RecipeIngredient { get; set; } // Required FK in Recipe
    }
}
