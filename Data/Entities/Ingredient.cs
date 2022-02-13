using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace FoodEaterRecipes.Data.Entities
{
    [Table("Ingredients")]
    public class Ingredient
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [MaxLength(100)]
        public string Name { get; set; }
        [Required]
        public decimal Carbohydrates { get; set; }
        [Required]
        public decimal Proteins { get; set; }
        [Required]
        public decimal Fats { get; set; }
        [Required]
        public DateTime UpdateDT { get; set; }
        [Required]
        public DateTime CreateDT { get; set; }

        [Required]
        [ForeignKey("UserId")]
        public int UserId { get; set; }                                    
        public User User { get; set; }     
        
        [Required]
        [ForeignKey("IngredientCategoryId")]
        public int IngredientCategoryId { get; set; }                      
        public IngredientCategory IngredientCategory { get; set; }    
        
        public ICollection<RecipeIngredient> RecipeIngredient { get; set; }
    }
}
