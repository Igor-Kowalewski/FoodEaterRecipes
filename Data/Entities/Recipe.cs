using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace FoodEaterRecipes.Data.Entities
{
    [Table("Recipes")]
    public class Recipe
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [MaxLength(100)]
        public string Name { get; set; }
        [Required]
        [MaxLength(10000)]
        public string Description { get; set; }
        [Required]
        public DateTime UpdateDT { get; set; }
        [Required]
        public DateTime CreateDT { get; set; }

        [Required]
        [ForeignKey("UserId")]
        public int UserId { get; set; }
        public User User { get; set; }     
        
        public ICollection<RecipeIngredient> RecipeIngredient { get; set; }
    }
}
