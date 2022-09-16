import { HttpClient } from "@angular/common/http";
import { Component, Input, OnInit } from "@angular/core";
import { Creator } from "../services/creator.service";
import { Ingredient } from "../shared/Ingredient";
import { faPlus } from '@fortawesome/free-solid-svg-icons';



@Component({
    selector: "ingredientCreator",
    templateUrl: "ingredientCreator.component.html"
})

export default class IngredientCreator {
    @Input() prefix!: string;            // wzorzec używany do wyszukiwania w API składników

    public ingredientSelected: string = "";       // opcja wybrana na liście rozwijanej Autocomplete
    public ingredientTemplate: Ingredient = new Ingredient;
    public faPlus;


    // inicjalizacja serwisu Creator - pobieranie danych z API do backendu i z backendu do frontendu
    constructor(public creator: Creator) {
        this.faPlus = faPlus;
    }


    ngOnInit(): void {
        //this.creator.getIngredients("bread").subscribe();     // było używane jedynie w ramach testu API

        this.creator.tableDataEdit.subscribe((value) => {
            let ingredientToEdit = this.creator.recipeIngredients.find(v => JSON.stringify(v) === JSON.stringify(value));
            this.ingredientTemplate = new Ingredient(ingredientToEdit);
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

        let temp = this.creator.searchIngredients.find((i) => { return i.name === ingredientSelected });

        if (temp !== undefined) {
            this.ingredientTemplate = new Ingredient(temp);
            console.log(this.ingredientTemplate);
        }
        else {
            console.log("Autocomplete problem occured:" + this.ingredientTemplate.name);
        }
    }


    // dodawanie nowego składnika do przepisu
    addIngredient(ingredientTemplate: Ingredient) {
        let ingredientCopy: Ingredient = new Ingredient(ingredientTemplate); // shallow copy template
        this.creator.tableDataPush.next(ingredientCopy); // and push copy to recipeingredients
    }
}