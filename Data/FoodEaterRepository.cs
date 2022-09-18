using FoodEaterRecipes.Data.Entities;
using FoodEaterRecipes.Models;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FoodEaterRecipes.Data
{
    public class FoodEaterRepository : IFoodEaterRepository
    {
        private readonly FoodEaterContext _context;
        private readonly ILogger<FoodEaterRepository> _logger;

        public FoodEaterRepository(FoodEaterContext context, ILogger<FoodEaterRepository> logger)
        {
            _context = context;
            _logger = logger;
        }

        public IEnumerable<Recipe> GetAllRecipes()
        {
            _logger.Log(LogLevel.Information, "GetAllRecipes was called");

            try
            {
                var result = (IEnumerable<Recipe>)_context.Recipes
                                .OrderBy(r => r.Name)
                                .ToList();

                foreach ( var recipe in result )
                {
                    if (recipe.Description.Length > 100)
                    {
                        recipe.Description = recipe.Description.Substring(0,97).Trim() + "...";
                    }
                }

                return result;
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to GetAllRecipes: {ex}");
                return null;
            }
        }

        public IEnumerable<Recipe> SearchByNameSuggestions(string Name)
        {
            _logger.Log(LogLevel.Information, "SearchByNameSuggestions was called");

            try
            {
                IEnumerable<Recipe> result;
                if ( Name == null )
                {
                    result = _context.Recipes
                                    .OrderBy(r => r.Name)
                                    .ToList();
                } 
                else
                {
                    result = _context.Recipes
                                    .Where(r => r.Name.Contains(Name))
                                    .OrderBy(r => r.Name)
                                    .ToList();
                }

                return result;
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to GetAllRecipes: {ex}");
                return null;
            }
        }

        public IEnumerable<Ingredient> GetIngredientsByCategory(string category)
        {
            _logger.Log(LogLevel.Information, "GetIngredientsByCategory was called");

            try
            {
                var categoryId = _context.IngredientCategories
                                        .Where(ic => ic.Name == category);

                return _context.Ingredients
                                .Where(i => i.IngredientCategory == categoryId)
                                .OrderBy(i => i.Name)
                                .ToList();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to GetIngredientsByCategory: {ex}");
                return null;
            }
        }


        public Recipe GetRecipeByName(string name)
        {
            _logger.Log(LogLevel.Information, "GetRecipeByName was called");

            try
            {
                var result = _context.Recipes
                                .Where(r => r.Name == name)
                                .FirstOrDefault();

                return result;
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to GetRecipeByName: {ex}");
                return null;
            }
        }

        public Recipe GetRecipeById(int id)
        {
            _logger.Log(LogLevel.Information, "GetRecipeById was called");

            try
            {
                var result = _context.Recipes
                                .Where(r => r.Id == id)
                                .FirstOrDefault();

                return result;
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to GetRecipeById: {ex}");
                return null;
            }
        }

        public IQueryable<RecipeIngredientDTO> GetRecipeDetailsById(int id)
        {
            _logger.Log(LogLevel.Information, "GetRecipeDetailsById was called");

            try
            {
                var result = from r in _context.Recipes
                             join ri in _context.RecipeIngredients on r.Id equals ri.RecipeId
                             join i in _context.Ingredients on ri.IngredientId equals i.Id
                             where r.Id == id
                             select new RecipeIngredientDTO()
                             {
                                 Name = i.Name,
                                 Amount = ri.IngredientWeight,
                                 Kcal = (double)((i.Fats * 9) + (i.Carbohydrates * 4) + (i.Proteins * 4)),
                                 Fats = (double)i.Fats,
                                 Carbs = (double)i.Carbohydrates,
                                 Proteins = (double)i.Proteins
                             };

                return result;
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to GetRecipeById: {ex}");
                return null;
            }
        }

        public bool SaveAll()
        {
            return _context.SaveChanges() > 0;
        }
    }
}
