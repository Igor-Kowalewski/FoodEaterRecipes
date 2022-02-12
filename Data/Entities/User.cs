using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FoodEaterRecipes.Data.Entities
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public DateTime UpdateDT { get; set; }
        public DateTime CreateDT { get; set; }
        public UserGroup UserGroup { get; set; }                // Required FK in User
        public ICollection<Recipe> Recipe { get; set; }         // Required FK in Recipe
        public ICollection<Ingredient> Ingredient { get; set; } // Required FK in Ingredient
    }
}
