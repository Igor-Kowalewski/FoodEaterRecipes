using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace FoodEaterRecipes.Data.Entities
{
    [Table("IngredientCategories")]
    public class IngredientCategory
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [MaxLength(100)]
        public string Name { get; set; }
        [Required]
        public DateTime UpdateDT { get; set; }
        [Required]
        public DateTime CreateDT { get; set; }
        public ICollection<Ingredient> Ingredient { get; set; }
    }
}
