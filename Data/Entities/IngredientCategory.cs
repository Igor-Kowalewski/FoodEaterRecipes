using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FoodEaterRecipes.Data.Entities
{
    public class IngredientCategory
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime UpdateDT { get; set; }
        public DateTime CreateDT { get; set; }
        public ICollection<Ingredient> Ingredient { get; set; } // Required FK in Ingredient
    }
}
