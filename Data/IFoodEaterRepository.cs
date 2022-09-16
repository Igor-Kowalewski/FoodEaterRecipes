using FoodEaterRecipes.Data.Entities;
using System.Collections.Generic;

namespace FoodEaterRecipes.Data
{
    public interface IFoodEaterRepository
    {
        IEnumerable<Recipe> GetAllRecipes();
        IEnumerable<Recipe> SearchByNameSuggestions(string Name);
        IEnumerable<Ingredient> GetIngredientsByCategory(string category);
        bool SaveAll();
        Recipe GetRecipeByName(string Name);
        Recipe GetRecipeById(int id);
    }
}