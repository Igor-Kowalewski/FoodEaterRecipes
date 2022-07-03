using FoodEaterRecipes.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FoodEaterRecipes.Models
{
    public class CreateRecipeDTO
    {
        public Recipe Recipe { get; set; }
        public List<Ingredient> Ingredients { get; set; }
        public List<RecipeIngredient> RecipeIngredient { get; set; }
    }
}
