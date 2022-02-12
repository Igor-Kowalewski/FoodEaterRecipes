using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FoodEaterRecipes.Data.Entities
{
    public class Recipe
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime UpdateDT { get; set; }
        public DateTime CreateDT { get; set; }
        public RecipeIngredient RecipeIngredient { get; set; } // Required FK in RecipeIngredient
    }
}
