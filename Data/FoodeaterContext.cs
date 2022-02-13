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
        public DbSet<IngredientCategory> IngredientCategories { get; set; }
        public DbSet<Recipe> Recipes { get; set; }
        public DbSet<RecipeIngredient> RecipeIngredients { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<UserGroup> UserGroups { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);

            optionsBuilder.UseSqlServer(_config["ConnectionStrings:FoodEaterDB"]);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<RecipeIngredient>()
                .HasOne(a => a.Ingredient)
                .WithMany(a => a.RecipeIngredient)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<RecipeIngredient>()
                .HasOne(a => a.Recipe)
                .WithMany(a => a.RecipeIngredient)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
