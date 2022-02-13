using FoodEaterRecipes.Data.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FoodEaterRecipes.Data
{
    public class FoodEaterContext : DbContext
    {
        private readonly IConfiguration _config;

        public FoodEaterContext(IConfiguration config)
        {
            _config = config;
        }

        public DbSet<Ingredient> Ingredients { get; set; }
        public DbSet<IngredientCategory> IngredientCategory { get; set; }
        public DbSet<Recipe> Recipe { get; set; }
        public DbSet<RecipeIngredient> RecipeIngredient { get; set; }
        public DbSet<User> User { get; set; }
        public DbSet<UserGroup> UserGroup { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);

            optionsBuilder.UseSqlServer(_config["ConnectionStrings:FoodEaterDB"]);
        }
    }
}
