import { HttpClient } from "@angular/common/http";
import { Component, Input, OnInit } from "@angular/core";
import { Creator } from "../services/creator.service";
import { Ingredient } from "../shared/Ingredient";


@Component({
    selector: "ingredientCreator",
    templateUrl: "ingredientCreator.component.html"
})

export default class IngredientCreator {
    @Input() prefix!: string;            // wzorzec używany do wyszukiwania w API składników

    public ingredientSelected: string = "";       // opcja wybrana na liście rozwijanej Autocomplete

    public ingredientTemplate: Ingredient = {
        name: null || '',
        weight: null || '',
        kcal: null || '',
        carbs: null || '',
        fats: null || '',
        proteins: null || ''
    }


    // inicjalizacja serwisu Creator - pobieranie danych z API do backendu i z backendu do frontendu
    constructor(public creator: Creator) {

    }


    // było używane jedynie w ramach testu API
    ngOnInit(): void {
        //this.creator.getIngredients("bread").subscribe();
    }


    // update listy składników na liście rozwijanej kontrolki Autocomplete
    updateIngredientList(prefix: string): void {
        this.creator.getIngredients(this.prefix)
            .subscribe();
    }


    // znajduję pierwszy element z Autocomplete, który pokrywa się z szukanym wzorcem wybranym z listy
    setTemplateIngredient(ingredientSelected: string) {
        this.ingredientSelected = ingredientSelected;

        let temp = this.creator.ingredients.find((i) => { return i.name === ingredientSelected });

        if (temp !== undefined) {
            this.ingredientTemplate = temp;
        }

        console.log(this.ingredientTemplate.name);
    }


    // dodawanie nowego składnika do przepisu
    addIngredient(ingredientTemplate: Ingredient) {
        if (ingredientTemplate.name != '')
        {
            console.log(ingredientTemplate.name);

            let ingredientCopy: Ingredient = { ...ingredientTemplate }; // shallow copy template
            this.creator.recipeIngredients.push(ingredientCopy); // and push copy to recipeingredients
            this.updateSummary();
        }
    }

    updateSummary(): void {
        this.creator.recipeSummary.weight = this.creator.recipeIngredients.reduce((sum, current) => sum + Number(current.weight), 0);
        this.creator.recipeSummary.kcal = this.creator.recipeIngredients.reduce((sum, current) => sum + Number(current.kcal), 0);
        this.creator.recipeSummary.carbs = this.creator.recipeIngredients.reduce((sum, current) => sum + Number(current.carbs), 0);
        this.creator.recipeSummary.fats = this.creator.recipeIngredients.reduce((sum, current) => sum + Number(current.fats), 0);
        this.creator.recipeSummary.proteins = this.creator.recipeIngredients.reduce((sum, current) => sum + Number(current.proteins), 0);
    }
}