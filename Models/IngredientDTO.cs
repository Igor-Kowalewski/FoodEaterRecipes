using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FoodEaterRecipes.Models
{
    // IngredientsSearchAPI myDeserializedClass = JsonConvert.DeserializeObject(myJsonResponse);
    public class IngredientDTO
    {
        public List<Common> Common { get; set; }
    }

    public class Photo
    {
        public string Thumb { get; set; }
        public object Highres { get; set; }
        public bool? Is_user_uploaded { get; set; }
    }

    public class FullNutrient
    {
        public double Value { get; set; }
        public int Attr_id { get; set; }
    }

    public class Common
    {
        public string Food_name { get; set; }
        public string Serving_unit { get; set; }
        public string Tag_name { get; set; }
        public double Serving_qty { get; set; }
        public object Common_type { get; set; }
        public string Tag_id { get; set; }
        public Photo Photo { get; set; }
        public double Serving_weight_grams { get; set; }
        public List<FullNutrient> Full_nutrients { get; set; }
        public string Locale { get; set; }
    }
}
