
import { Component } from "@angular/core";
import { Creator } from "../services/creator.service";
import { Ingredient } from "../shared/Ingredient";


@Component({
    selector: "recipeCreator",
    templateUrl: "recipeCreator.component.html"
})


export default class RecipeCreator {
    public ingredients: Ingredient[] = [];
    public recipeSummary: Ingredient = {
        name: null || '',
        weight: null || 0,
        kcal: null || 0,
        carbs: null || 0,
        fats: null || 0,
        proteins: null || 0
    }


    constructor(private creator: Creator) {
        this.ingredients = creator.recipeIngredients;
        this.recipeSummary = creator.recipeSummary;
    }


}