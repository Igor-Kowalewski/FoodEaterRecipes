"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var IngredientCreator = /** @class */ (function () {
    // inicjalizacja serwisu Creator - pobieranie danych z API do backendu i z backendu do frontendu
    function IngredientCreator(creator) {
        this.creator = creator;
        this.ingredientSelectedInAutocomplete = ""; // opcja wybrana na liście rozwijanej Autocomplete
        this.ingredientSelectedIntoForm = {
            name: "",
            kcal: 0,
            carbs: 0,
            fats: 0,
            proteins: 0
        };
    }
    // było używane jedynie w ramach testu API
    IngredientCreator.prototype.ngOnInit = function () {
        //this.creator.getIngredients("bread").subscribe();
    };
    // update listy składników na liście rozwijanej kontrolki Autocomplete
    IngredientCreator.prototype.updateIngredientList = function (prefix) {
        this.creator.getIngredients(this.prefix)
            .subscribe();
    };
    // znajduję pierwszy element z Autocomplete, który pokrywa się z szukanym wzorcem wybranym z listy
    IngredientCreator.prototype.setTemplateIngredient = function (ingredientSelected) {
        this.ingredientSelectedInAutocomplete = ingredientSelected;
        var temp = this.creator.ingredients.find(function (i) { return i.name === ingredientSelected; });
        if (temp !== undefined) {
            this.ingredientSelectedIntoForm = temp;
        }
        console.log(this.ingredientSelectedIntoForm.name);
    };
    __decorate([
        (0, core_1.Input)()
    ], IngredientCreator.prototype, "prefix");
    IngredientCreator = __decorate([
        (0, core_1.Component)({
            selector: "ingredientCreator",
            templateUrl: "ingredientCreator.component.html"
        })
    ], IngredientCreator);
    return IngredientCreator;
}());
exports["default"] = IngredientCreator;
