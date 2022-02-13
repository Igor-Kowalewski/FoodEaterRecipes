using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FoodEaterRecipes.Data.Entities
{
    public class RecipeIngredient
    {
        public int Id { get; set; }
        public DateTime UpdateDT { get; set; }
        public DateTime CreateDT { get; set; }
        public int RecipeId { get; set; }
        public Recipe Recipe { get; set; }
        public int IngredientId { get; set; }
        public Ingredient Ingredient { get; set; }
    }
}
