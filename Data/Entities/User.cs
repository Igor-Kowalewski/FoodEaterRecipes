using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace FoodEaterRecipes.Data.Entities
{
    [Table("Users")]
    public class User
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [MaxLength(100)]
        public string Name { get; set; }
        [Required]
        [MaxLength(100)]
        public string Email { get; set; }
        [Required]
        [MaxLength(100)]
        public string Password { get; set; }
        [Required]
        public DateTime UpdateDT { get; set; }
        [Required]
        public DateTime CreateDT { get; set; }

        [Required]
        [ForeignKey("UserGroupId")]
        public int UserGroupId { get; set; }
        public UserGroup UserGroup { get; set; }
        
        public ICollection<Recipe> Recipe { get; set; }        
        public ICollection<Ingredient> Ingredient { get; set; }
    }
}
