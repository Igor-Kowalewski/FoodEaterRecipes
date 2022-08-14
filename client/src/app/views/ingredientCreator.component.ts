import { HttpClient } from "@angular/common/http";
import { Component, Input, OnInit } from "@angular/core";
import { Creator } from "../services/creator.service";
import { Ingredient } from "../shared/Ingredient";
import { debounceTime } from 'rxjs/operators';



@Component({
    selector: "ingredientCreator",
    templateUrl: "ingredientCreator.component.html"
})

export default class IngredientCreator {
    @Input() prefix!: string | string;                          // wzorzec używany do wyszukiwania w API składników

    public ingredientSelectedInAutocomplete: string = "";       // opcja wybrana na liście rozwijanej Autocomplete

    public ingredientSelectedIntoForm: Ingredient = {
        name: "",
        kcal: 0,
        carbs: 0,
        fats: 0,
        proteins: 0
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
        this.ingredientSelectedInAutocomplete = ingredientSelected;

        let temp = this.creator.ingredients.find((i) => { return i.name === ingredientSelected });

        if (temp !== undefined) {
            this.ingredientSelectedIntoForm = temp;
        }

        console.log(this.ingredientSelectedIntoForm.name);
    }

}