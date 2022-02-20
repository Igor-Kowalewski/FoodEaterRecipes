using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FoodEaterRecipes.Models
{
    //IngredientAddToRecipeAPI myDeserializedClass = JsonConvert.DeserializeObject(myJsonResponse);
    public class IngredientAddToRecipeAPI
    {
        public List<Food> Foods { get; set; }
    }

    public class FullNutrient
    {
        public int Attr_id { get; set; }
        public double Value { get; set; }
    }

    public class Metadata
    {
        public bool Is_raw_food { get; set; }
    }

    public class Tags
    {
        public string Item { get; set; }
        public object Measure { get; set; }
        public string Quantity { get; set; }
        public int Food_group { get; set; }
        public int Tag_id { get; set; }
    }

    public class AltMeasure
    {
        public double Serving_weight { get; set; }
        public string Measure { get; set; }
        public int? Seq { get; set; }
        public int Qty { get; set; }
    }

    public class Image
    {
        public string Thumb { get; set; }
        public string Highres { get; set; }
        public bool Is_user_uploaded { get; set; }
    }

    public class Food
    {
        public string Food_name { get; set; }
        public object Brand_name { get; set; }
        public int Serving_qty { get; set; }
        public string Serving_unit { get; set; }
        public int Serving_weight_grams { get; set; }
        public double Nf_calories { get; set; }
        public double Nf_total_fat { get; set; }
        public double Nf_saturated_fat { get; set; }
        public int Nf_cholesterol { get; set; }
        public double Nf_sodium { get; set; }
        public double Nf_total_carbohydrate { get; set; }
        public double Nf_dietary_fiber { get; set; }
        public double Nf_sugars { get; set; }
        public double Nf_protein { get; set; }
        public double Nf_potassium { get; set; }
        public double Nf_p { get; set; }
        public List<FullNutrient> Full_nutrients { get; set; }
        public object Nix_brand_name { get; set; }
        public object Nix_brand_id { get; set; }
        public object Nix_item_name { get; set; }
        public object Nix_item_id { get; set; }
        public object Upc { get; set; }
        public DateTime Consumed_at { get; set; }
        public Metadata Metadata { get; set; }
        public int Source { get; set; }
        public int Ndb_no { get; set; }
        public Tags Tags { get; set; }
        public List<AltMeasure> Alt_measures { get; set; }
        public object Lat { get; set; }
        public object Lng { get; set; }
        public int Meal_type { get; set; }
        public Image Image { get; set; }
        public object Sub_recipe { get; set; }
        public object Class_code { get; set; }
        public object Brick_code { get; set; }
        public object Tag_id { get; set; }
    }
}
