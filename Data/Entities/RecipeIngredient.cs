using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace FoodEaterRecipes.Data.Entities
{
    [Table("RecipeIngredients")]
    public class RecipeIngredient
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public DateTime UpdateDT { get; set; }
        [Required]
        public DateTime CreateDT { get; set; }

        [Required]
        [ForeignKey("RecipeId")]
        public int RecipeId { get; set; }
        public Recipe Recipe { get; set; }

        [Required]
        [ForeignKey("IngredientId")]
        public int IngredientId { get; set; }
        public Ingredient Ingredient { get; set; }
    }
}
