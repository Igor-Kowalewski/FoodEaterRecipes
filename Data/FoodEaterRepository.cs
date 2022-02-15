﻿using FoodEaterRecipes.Data.Entities;
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
                return _context.Recipes
                                .OrderBy(r => r.Name)
                                .ToList();
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

        public bool SaveAll()
        {
            return _context.SaveChanges() > 0;
        }
    }
}
