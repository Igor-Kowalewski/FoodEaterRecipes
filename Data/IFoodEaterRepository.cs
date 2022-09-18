using FoodEaterRecipes.Data.Entities;
using FoodEaterRecipes.Models;
using System.Collections.Generic;
using System.Linq;

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
        IQueryable<RecipeIngredientDTO> GetRecipeDetailsById(int id);
    }
}