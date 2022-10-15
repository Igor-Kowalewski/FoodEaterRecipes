using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FoodEaterRecipes.Models
{
    public class NewRecipeIngredientDTO
    {
        [JsonProperty("id")]
        public string Id { get; set; }
        [JsonProperty("name")]
        public string Name { get; set; }
        [JsonProperty("weight")]
        public double Weight { get; set; }
        [JsonProperty("kcal")]
        public double Kcal { get; set; }
        [JsonProperty("carbs")]
        public double Carbs { get; set; }
        [JsonProperty("proteins")]
        public double Proteins { get; set; }
        [JsonProperty("fats")]
        public double Fats { get; set; }
    }
}
