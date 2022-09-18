using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FoodEaterRecipes.Models
{
    public class RecipeIngredientDTO
    {
        public string Name { get; set; }
        public double Amount { get; set; }
        public double Kcal { get; set; }
        public double Carbs { get; set; }
        public double Proteins { get; set; }
        public double Fats { get; set; }
    }
}
