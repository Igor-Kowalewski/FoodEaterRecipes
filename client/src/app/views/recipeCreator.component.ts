
import { Component } from "@angular/core";
import { Creator } from "../services/creator.service";
import { Ingredient } from "../shared/Ingredient";

@Component({
    selector: "recipeCreator",
    templateUrl: "recipeCreator.component.html"
})


export default class RecipeCreator {
    public ingredients: Ingredient[] = [];

    constructor(private creator: Creator) {
        this.ingredients = creator.ingredients;
    }
}