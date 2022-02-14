using FoodEaterRecipes.Data.Entities;
using System.Collections.Generic;

namespace FoodEaterRecipes.Data
{
    public interface IFoodEaterRepository
    {
        IEnumerable<Recipe> GetAllRecipes();
        IEnumerable<Ingredient> GetIngredientsByCategory(string category);
        bool SaveAll();
    }
}