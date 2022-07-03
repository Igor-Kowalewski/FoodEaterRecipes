using FoodEaterRecipes.Data.Entities;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FoodEaterRecipes.Data
{
    public class FoodEaterSeeder
    {
        private readonly FoodEaterContext _ctx;
        private readonly UserManager<User> _userManager;

        public FoodEaterSeeder(FoodEaterContext ctx, UserManager<User> userManager)
        {
            _ctx = ctx;
            _userManager = userManager;
        }

        public async Task SeedAsync()
        {
            _ctx.Database.EnsureCreated(); // IF DB EXISTS

            User user = await _userManager.FindByEmailAsync("kowalewski.igor.ug@gmail.com");

            if (user == null)
            {
                user = new User()
                {
                    Name = "IgorKowalewski",
                    Email = "kowalewski.igor.ug@gmail.com",
                    UserName = "IgorKowalewski"
                };

                var result = await _userManager.CreateAsync(user, "TrudneHasło1");
                if (result != IdentityResult.Success)
                {
                    throw new InvalidOperationException("Cannot create new user during seeding");
                }
            }


                if (!_ctx.Recipes.Any()) // AND IT'S EMPTY
                {
                    // CREATE SAMPLE INGREDIENTCATEGORY
                    IngredientCategory category = new()
                    {
                        Name = "Common",
                        UpdateDT = DateTime.Today,
                        CreateDT = DateTime.Today
                    };
                    _ctx.IngredientCategories.Add(category);
                    _ctx.SaveChanges();



                    // CREATE SAMPLE INGREDIENTS
                    List<Ingredient> ingredients = new()
                    {
                        new Ingredient()
                        {
                            Name = "Testowy składnik " + 1,
                            Carbohydrates = (decimal)10.5,
                            Proteins = (decimal)21.7,
                            Fats = (decimal)32.5,
                            UpdateDT = DateTime.Today,
                            CreateDT = DateTime.Today,
                            UserId = _ctx.Users.First().Id,
                            IngredientCategoryId = _ctx.IngredientCategories.First().Id
                        },
                        new Ingredient()
                        {
                            Name = "Testowy składnik " + 2,
                            Carbohydrates = (decimal)22.5,
                            Proteins = (decimal)13.7,
                            Fats = (decimal)65.5,
                            UpdateDT = DateTime.Today,
                            CreateDT = DateTime.Today,
                            UserId = _ctx.Users.First().Id,
                            IngredientCategoryId = _ctx.IngredientCategories.First().Id
                        },
                        new Ingredient()
                        {
                            Name = "Testowy składnik " + 3,
                            Carbohydrates = (decimal)31.5,
                            Proteins = (decimal)7.7,
                            Fats = (decimal)2.5,
                            UpdateDT = DateTime.Today,
                            CreateDT = DateTime.Today,
                            UserId = _ctx.Users.First().Id,
                            IngredientCategoryId = _ctx.IngredientCategories.First().Id
                        },
                    };
                    _ctx.Ingredients.AddRange(ingredients);
                    _ctx.SaveChanges();


                    // CREATE SAMPLE RECIPES
                    List<Recipe> recipes = new();
                    for (int i = 1; i <= 6; i++)
                    {
                        Recipe recipe = new() 
                        { 
                            Name = "Testowy przepis id" + i,
                            Description = "Szczegółowy opis przygotowania przepisu " + i,
                            UserId = _ctx.Users.First().Id,
                            RecipeIngredient = new List<RecipeIngredient>()
                            { 
                                new RecipeIngredient()
                                {
                                    IngredientId = _ctx.Ingredients.Where( x => x.Name == "Testowy składnik 1" ).First().Id,
                                    IngredientWeight = 200,
                                    UpdateDT = DateTime.Today,
                                    CreateDT = DateTime.Today
                                },
                                new RecipeIngredient()
                                {
                                    IngredientId = _ctx.Ingredients.Where( x => x.Name == "Testowy składnik 2" ).First().Id,
                                    IngredientWeight = 100,
                                    UpdateDT = DateTime.Today,
                                    CreateDT = DateTime.Today
                                },
                                new RecipeIngredient()
                                {
                                    IngredientId = _ctx.Ingredients.Where( x => x.Name == "Testowy składnik 3" ).First().Id,
                                    IngredientWeight = 150,
                                    UpdateDT = DateTime.Today,
                                    CreateDT = DateTime.Today
                                },
                            },

                            UpdateDT = DateTime.Today,
                            CreateDT = DateTime.Today,
                            ImageFilename = new("19647b73-0d21-40eb-bf84-7991dc7541e0")
                        };
                        recipes.Add(recipe);
                    }

                    _ctx.Recipes.AddRange(recipes);
                    _ctx.SaveChanges();
                }
           

        }
    }
}
