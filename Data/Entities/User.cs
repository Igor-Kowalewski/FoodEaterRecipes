﻿using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace FoodEaterRecipes.Data.Entities
{
    [Table("Users")]
    public class User : IdentityUser
    {
        [Required]
        [MaxLength(100)]
        public string Name { get; set; }
        [Required]
        public DateTime UpdateDT { get; set; }
        [Required]
        public DateTime CreateDT { get; set; }
        public ICollection<Recipe> Recipe { get; set; }        
        public ICollection<Ingredient> Ingredient { get; set; }
    }
}
