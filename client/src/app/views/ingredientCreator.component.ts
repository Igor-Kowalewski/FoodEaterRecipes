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


    ngOnInit(): void {
        //this.creator.getIngredients("bread").subscribe();     // było używane jedynie w ramach testu API

        this.creator.tableDataEdit.subscribe((value) => {

            let ingredientToEdit = this.creator.recipeIngredients.find(v => v.name = value.name)

            this.ingredientTemplate.name = ingredientToEdit!.name;
            this.ingredientTemplate.weight = 0;
            this.ingredientTemplate.kcal = Number(ingredientToEdit!.kcal).toFixed(2);
            this.ingredientTemplate.fats = Number(ingredientToEdit!.fats).toFixed(2);
            this.ingredientTemplate.carbs = Number(ingredientToEdit!.carbs).toFixed(2);
            this.ingredientTemplate.proteins = Number(ingredientToEdit!.proteins).toFixed(2);
        });
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
            this.ingredientTemplate.name = temp.name;
            this.ingredientTemplate.weight = 0;
            this.ingredientTemplate.kcal = Number(temp.kcal).toFixed(2);
            this.ingredientTemplate.fats = Number(temp.fats).toFixed(2);
            this.ingredientTemplate.carbs = Number(temp.carbs).toFixed(2);
            this.ingredientTemplate.proteins = Number(temp.proteins).toFixed(2);
        }

        console.log(this.ingredientTemplate);
    }


    // dodawanie nowego składnika do przepisu
    addIngredient(ingredientTemplate: Ingredient) {
        if (ingredientTemplate.name != '')
        {
            console.log(ingredientTemplate.name);

            let ingredientCopy: Ingredient = { ...ingredientTemplate }; // shallow copy template
            this.creator.tableDataPush.next(ingredientCopy); // and push copy to recipeingredients
        }
    }
}