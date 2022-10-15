"use strict";
(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _views_ingredientCreator_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/ingredientCreator.component */ 4190);
/* harmony import */ var _views_recipeCreator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/recipeCreator.component */ 3919);



class AppComponent {
    constructor() {
        this.title = 'Add ingredient';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-recipe-creator"]], decls: 5, vars: 0, consts: [[1, "row"], [1, "col-12", "col-md-6"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "ingredientCreator");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "recipeCreator");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } }, dependencies: [_views_ingredientCreator_component__WEBPACK_IMPORTED_MODULE_0__["default"], _views_recipeCreator_component__WEBPACK_IMPORTED_MODULE_1__["default"]], encapsulation: 2 });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _services_creator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/creator.service */ 5664);
/* harmony import */ var _views_ingredientCreator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/ingredientCreator.component */ 4190);
/* harmony import */ var _views_recipeCreator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/recipeCreator.component */ 3919);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/autocomplete */ 8550);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sort */ 2197);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);













//import { NgbdSortableHeader } from './directives/sortable.directive';



class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        _services_creator_service__WEBPACK_IMPORTED_MODULE_1__.Creator
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__.MatAutocompleteModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__.MatDividerModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_12__.MatListModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSortModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__.FontAwesomeModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__.MatAutocompleteModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _views_ingredientCreator_component__WEBPACK_IMPORTED_MODULE_2__["default"],
        _views_recipeCreator_component__WEBPACK_IMPORTED_MODULE_3__["default"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__.MatAutocompleteModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__.MatDividerModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_12__.MatListModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSortModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__.FontAwesomeModule], exports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__.MatAutocompleteModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule] }); })();


/***/ }),

/***/ 5664:
/*!*********************************************!*\
  !*** ./src/app/services/creator.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Creator": () => (/* binding */ Creator)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _shared_Ingredient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/Ingredient */ 9610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);






class Creator {
    constructor(http) {
        this.http = http;
        this.tableDataPush = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.tableDataPop = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.tableDataEdit = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.searchIngredients = [];
        this.recipeIngredients = [];
        this.recipeSummary = new _shared_Ingredient__WEBPACK_IMPORTED_MODULE_0__.Ingredient;
    }
    // Zapytanie do kontrolera a następnie api@nutritionix.com
    getIngredients(prefix) {
        let url = "/api/Ingredients";
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        headers.append('Content-Type', 'application/json');
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set("prefix", prefix);
        return this.http.get(url, { headers: headers, params: params })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(data => {
            this.searchIngredients = data;
            return;
        }));
    }
}
Creator.ɵfac = function Creator_Factory(t) { return new (t || Creator)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
Creator.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: Creator, factory: Creator.ɵfac });


/***/ }),

/***/ 9610:
/*!**************************************!*\
  !*** ./src/app/shared/Ingredient.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ingredient": () => (/* binding */ Ingredient)
/* harmony export */ });
class Ingredient {
    /// setting default model values
    constructor(ingredient) {
        this.id = crypto.randomUUID();
        this.name = ingredient?.name ? ingredient.name : '';
        this.weight = ingredient?.weight ? Number(ingredient.weight).toFixed(2) : 0;
        this.kcal = ingredient?.kcal ? Number(ingredient.kcal).toFixed(2) : 0;
        this.carbs = ingredient?.carbs ? Number(ingredient.carbs).toFixed(2) : 0;
        this.fats = ingredient?.fats ? Number(ingredient.fats).toFixed(2) : 0;
        this.proteins = ingredient?.proteins ? Number(ingredient.proteins).toFixed(2) : 0;
    }
    ;
    /// self validation
    static isValid(i) {
        if (i.name.length == 0) {
            alert("Ingredient name is required!");
            return false;
        }
        if (i.weight == 0) {
            alert("Ingredient weight is required!");
            return false;
        }
        return true;
    }
}


/***/ }),

/***/ 4190:
/*!******************************************************!*\
  !*** ./src/app/views/ingredientCreator.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IngredientCreator)
/* harmony export */ });
/* harmony import */ var _shared_Ingredient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/Ingredient */ 9610);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 655);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_creator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/creator.service */ 5664);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/autocomplete */ 8550);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);












function IngredientCreator_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", i_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", i_r2.name, " ");
} }
class IngredientCreator {
    // inicjalizacja serwisu Creator - pobieranie danych z API do backendu i z backendu do frontendu
    constructor(creator) {
        this.creator = creator;
        this.ingredientSelected = ""; // opcja wybrana na liście rozwijanej Autocomplete
        this.ingredientTemplate = new _shared_Ingredient__WEBPACK_IMPORTED_MODULE_0__.Ingredient;
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faPlus;
    }
    ngOnInit() {
        //this.creator.getIngredients("bread").subscribe();     // było używane jedynie w ramach testu API
        this.creator.tableDataEdit.subscribe((value) => {
            let ingredientToEdit = this.creator.recipeIngredients.find(v => JSON.stringify(v) === JSON.stringify(value));
            this.ingredientTemplate = new _shared_Ingredient__WEBPACK_IMPORTED_MODULE_0__.Ingredient(ingredientToEdit);
        });
    }
    // update listy składników na liście rozwijanej kontrolki Autocomplete
    updateIngredientList(prefix) {
        this.creator.getIngredients(this.prefix)
            .subscribe();
    }
    // znajduję pierwszy element z Autocomplete, który pokrywa się z szukanym wzorcem wybranym z listy
    setTemplateIngredient(ingredientSelected) {
        this.ingredientSelected = ingredientSelected;
        let temp = this.creator.searchIngredients.find((i) => { return i.name === ingredientSelected; });
        if (temp !== undefined) {
            this.ingredientTemplate = new _shared_Ingredient__WEBPACK_IMPORTED_MODULE_0__.Ingredient(temp);
            console.log(this.ingredientTemplate);
        }
        else {
            console.log("Autocomplete problem occured:" + this.ingredientTemplate.name);
        }
    }
    // dodawanie nowego składnika do przepisu
    addIngredient(ingredientTemplate) {
        // shallow copy
        let ingredientCopy = new _shared_Ingredient__WEBPACK_IMPORTED_MODULE_0__.Ingredient(ingredientTemplate);
        // zmiana wartości odżywczych w 100g na wziętą wagę produktu
        ingredientCopy.kcal = (Number(ingredientCopy.kcal) * Number(ingredientCopy.weight)) / 100;
        ingredientCopy.carbs = (Number(ingredientCopy.carbs) * Number(ingredientCopy.weight)) / 100;
        ingredientCopy.proteins = (Number(ingredientCopy.proteins) * Number(ingredientCopy.weight)) / 100;
        ingredientCopy.fats = (Number(ingredientCopy.fats) * Number(ingredientCopy.weight)) / 100;
        this.creator.tableDataPush.next(ingredientCopy); // and push copy to recipeingredients
    }
}
IngredientCreator.ɵfac = function IngredientCreator_Factory(t) { return new (t || IngredientCreator)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_creator_service__WEBPACK_IMPORTED_MODULE_1__.Creator)); };
IngredientCreator.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: IngredientCreator, selectors: [["ingredientCreator"]], inputs: { prefix: "prefix" }, decls: 29, vars: 10, consts: [[1, "row", "border", "border-dark", "rounded-lg", "p-3", "m-1", "mb-3"], [1, "h3"], [1, "col", "col-10", "col-md-9", "p-2", "m-0", "d-inline-block"], ["type", "text", "name", "prefix", "matInput", "", "placeholder", "Search ingredient", 3, "ngModel", "matAutocomplete", "ngModelChange"], ["panelWidth", "auto", 3, "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col", "col-2", "col-md-3", "p-0", "m-0", "d-inline-block"], ["id", "addIngredientBtn", 1, "btn", "btn-light", "btn-block", 3, "click"], [3, "icon"], ["id", "ingredientCreator", 1, "col", "col-12", "p-0", "m-0", "d-inline-block", "rounded", "m-0", "p-1"], [1, "col", "col-12", "m-0", "p-0", "d-inline-block"], [1, "m-1", "p-1"], ["matInput", "", "required", "", "type", "text", "placeholder", "Name", "name", "name", 1, "mat-form-field", "m-0", "p-1", 3, "ngModel", "ngModelChange"], ["matInput", "", "numbersOnly", "", "required", "", "type", "number", "placeholder", "Weight (g)", "name", "weight", 1, "mat-form-field", "m-0", "p-1", 3, "ngModel", "ngModelChange"], ["matInput", "", "numbersOnly", "", "required", "", "type", "number", "min", "0", "max", "900", "placeholder", "Kcal per 100g", "name", "kcal", 1, "mat-form-field", "m-0", "p-1", 3, "ngModel", "ngModelChange"], ["matInput", "", "numbersOnly", "", "required", "", "type", "number", "min", "0", "max", "100", "placeholder", "Carbohydrates per 100g", "name", "carbs", 1, "mat-form-field", "m-0", "p-1", 3, "ngModel", "ngModelChange"], ["matInput", "", "numbersOnly", "", "required", "", "type", "number", "min", "0", "max", "100", "placeholder", "Fats per 100g", "name", "fats", 1, "mat-form-field", "m-0", "p-1", 3, "ngModel", "ngModelChange"], ["matInput", "", "numbersOnly", "", "required", "", "type", "number", "min", "0", "max", "100", "placeholder", "Proteins per 100g", "name", "proteins", 1, "mat-form-field", "m-0", "p-1", 3, "ngModel", "ngModelChange"], [3, "value"]], template: function IngredientCreator_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Ingredient");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "mat-divider")(4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "form", 2)(6, "mat-form-field")(7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function IngredientCreator_Template_input_ngModelChange_7_listener($event) { return ctx.prefix = $event; })("ngModelChange", function IngredientCreator_Template_input_ngModelChange_7_listener() { return ctx.updateIngredientList(ctx.prefix); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-autocomplete", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("optionSelected", function IngredientCreator_Template_mat_autocomplete_optionSelected_8_listener($event) { return ctx.setTemplateIngredient($event.option.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, IngredientCreator_mat_option_10_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7)(12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function IngredientCreator_Template_button_click_12_listener() { return ctx.addIngredient(ctx.ingredientTemplate); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "fa-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 10)(15, "div", 11)(16, "form", 12)(17, "mat-form-field")(18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function IngredientCreator_Template_input_ngModelChange_18_listener($event) { return ctx.ingredientTemplate.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-form-field")(20, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function IngredientCreator_Template_input_ngModelChange_20_listener($event) { return ctx.ingredientTemplate.weight = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-form-field")(22, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function IngredientCreator_Template_input_ngModelChange_22_listener($event) { return ctx.ingredientTemplate.kcal = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-form-field")(24, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function IngredientCreator_Template_input_ngModelChange_24_listener($event) { return ctx.ingredientTemplate.carbs = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "mat-form-field")(26, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function IngredientCreator_Template_input_ngModelChange_26_listener($event) { return ctx.ingredientTemplate.fats = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "mat-form-field")(28, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function IngredientCreator_Template_input_ngModelChange_28_listener($event) { return ctx.ingredientTemplate.proteins = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.prefix)("matAutocomplete", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.creator.searchIngredients);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faPlus);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.ingredientTemplate.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.ingredientTemplate.weight);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.ingredientTemplate.kcal);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.ingredientTemplate.carbs);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.ingredientTemplate.fats);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.ingredientTemplate.proteins);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__.MatAutocompleteTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgForm, _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__.MatDivider, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__.FaIconComponent], encapsulation: 2 });


/***/ }),

/***/ 3919:
/*!**************************************************!*\
  !*** ./src/app/views/recipeCreator.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RecipeCreator)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _shared_Ingredient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/Ingredient */ 9610);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ 2197);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 655);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_creator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/creator.service */ 5664);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/a11y */ 4218);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);

















function RecipeCreator_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RecipeCreator_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r18.name, " ");
} }
function RecipeCreator_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Weight ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RecipeCreator_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, element_r19.weight, "1.0-0"), " ");
} }
function RecipeCreator_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Kcal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RecipeCreator_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, element_r20.kcal, "1.0-0"), " ");
} }
function RecipeCreator_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Carbs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RecipeCreator_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, element_r21.carbs, "1.0-0"), " ");
} }
function RecipeCreator_th_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Fats ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RecipeCreator_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, element_r22.fats, "1.0-0"), " ");
} }
function RecipeCreator_th_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Proteins ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RecipeCreator_td_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, element_r23.proteins, "1.0-0"), " ");
} }
function RecipeCreator_mat_header_cell_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-header-cell");
} }
function RecipeCreator_mat_cell_36_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-cell")(1, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RecipeCreator_mat_cell_36_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26); const element_r24 = restoredCtx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r25.editIngredient(element_r24)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "fa-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RecipeCreator_mat_cell_36_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26); const element_r24 = restoredCtx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r27.deleteIngredient(element_r24)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "fa-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r13.faPenToSquare);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r13.faTrash);
} }
function RecipeCreator_tr_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 50);
} }
function RecipeCreator_tr_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 51);
} }
const _c0 = function (a0) { return { "width": a0 }; };
function RecipeCreator_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 31)(1, "div", 32)(2, "div", 52)(3, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c0, ctx_r16.uploadProgress + "%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-valuenow", ctx_r16.uploadProgress);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r16.uploadProgress, "%");
} }
function RecipeCreator_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r17.uploadUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
class RecipeCreator {
    constructor(creator, http, _liveAnnouncer) {
        this.creator = creator;
        this.http = http;
        this._liveAnnouncer = _liveAnnouncer;
        this.recipeGuid = '';
        this.recipeName = '';
        this.recipeDesc = '';
        this.ingredients = [];
        this.recipeSummary = new _shared_Ingredient__WEBPACK_IMPORTED_MODULE_0__.Ingredient;
        this.working = false;
        this.uploadFileLabel = 'Choose an image';
        this.uploadProgress = 0;
        this.uploadUrl = '';
        this.displayedColumns = ['name', 'weight', 'kcal', 'carbs', 'fats', 'proteins', 'actions'];
        this.ingredients = creator.recipeIngredients;
        this.recipeSummary = creator.recipeSummary;
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faPlus;
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faTrash;
        this.faPenToSquare = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faPenToSquare;
    }
    ngOnInit() {
        this.http.get('/RandomGuid').subscribe(result => {
            this.recipeGuid = result.toString();
            console.log('Recipe Guid: ' + this.recipeGuid);
        });
        this.creator.tableDataPush.subscribe((value) => {
            if (_shared_Ingredient__WEBPACK_IMPORTED_MODULE_0__.Ingredient.isValid(value)) {
                this.creator.recipeIngredients.push(value);
                console.log("Adding ingredient: " + value.name);
                let temp = this.creator.recipeIngredients;
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource(temp);
                this.dataSource.sort = this.sort;
                this.RefreshSummary();
            }
            else {
                console.log("Ingredient invalid: " + value.name);
            }
        });
        this.creator.tableDataPop.subscribe((value) => {
            let position = this.creator.recipeIngredients.findIndex(v => JSON.stringify(v) === JSON.stringify(value));
            console.log("Deleting ingredient: " + position + ". " + value.name);
            this.creator.recipeIngredients.splice(position, 1);
            let temp = this.creator.recipeIngredients;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource(temp);
            this.dataSource.sort = this.sort;
            this.RefreshSummary();
        });
        this.creator.tableDataEdit.subscribe((value) => {
            let position = this.creator.recipeIngredients.findIndex(v => JSON.stringify(v) === JSON.stringify(value));
            console.log("Edit ingredient: " + position + ". " + value.name);
            this.creator.recipeIngredients.splice(position, 1);
            let temp = this.creator.recipeIngredients;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource(temp);
            this.dataSource.sort = this.sort;
            this.RefreshSummary();
        });
    }
    RefreshSummary() {
        this.creator.recipeSummary.weight = this.creator.recipeIngredients.reduce((sum, current) => sum + Number(current.weight), 0);
        this.creator.recipeSummary.kcal = this.creator.recipeIngredients.reduce((sum, current) => sum + Number(current.kcal), 0);
        this.creator.recipeSummary.carbs = this.creator.recipeIngredients.reduce((sum, current) => sum + Number(current.carbs), 0);
        this.creator.recipeSummary.fats = this.creator.recipeIngredients.reduce((sum, current) => sum + Number(current.fats), 0);
        this.creator.recipeSummary.proteins = this.creator.recipeIngredients.reduce((sum, current) => sum + Number(current.proteins), 0);
        console.log("Refreshing recipe summary");
    }
    /// RECIPE IMAGE UPLOAD
    handleFileInput(files) {
        if (files.length > 0) {
            this.uploadFile = files.item(0);
            this.uploadFileLabel = this.uploadFile?.name;
            //this.uploadFileLabel = this.recipeGuid;
        }
    }
    upload() {
        if (!this.uploadFile) {
            alert('Choose an image');
            return;
        }
        const formData = new FormData();
        ///formData.append(this.uploadFile.name, this.uploadFile);
        formData.append(this.recipeGuid, this.uploadFile);
        const url = `/api/src/upload`;
        const uploadReq = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpRequest('POST', url, formData, {
            reportProgress: true,
        });
        this.uploadUrl = '';
        this.uploadProgress = 0;
        this.working = true;
        this.http.request(uploadReq).subscribe((event) => {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpEventType.UploadProgress) {
                this.uploadProgress = Math.round((100 * event.loaded) / event.total);
            }
            else if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpEventType.Response) {
                this.uploadUrl = event.body.url;
            }
        }, (error) => {
            console.error(error);
        }).add(() => {
            this.working = false;
        });
    }
    /// Announce the change in sort state for assistive technology.
    announceSortChange(sortState) {
        /// This example uses English messages. If your application supports
        /// multiple language, you would internationalize these strings.
        /// Furthermore, you can customize the message to add additional
        /// details about the values being sorted.
        if (sortState.direction) {
            this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
        }
        else {
            this._liveAnnouncer.announce('Sorting cleared');
        }
    }
    editIngredient(ingredient) {
        this.creator.tableDataEdit.next(ingredient);
    }
    deleteIngredient(ingredient) {
        this.creator.tableDataPop.next(ingredient);
    }
    addRecipe() {
        const formData = new FormData();
        formData.append('RecipeGuid', this.recipeGuid);
        formData.append('RecipeName', this.recipeName);
        formData.append('RecipeDesc', this.recipeDesc);
        formData.append('RecipeIngredients', JSON.stringify(this.ingredients));
        const url = '/Create';
        const request = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpRequest('POST', url, formData, {});
        /// prawidłowe dodanie - przekierowanie do przepisów
        /// nieprawidłowe dodanie - pozostanie w kreatorze i wyświetlenie alertu
        this.http.request(request).subscribe((response) => {
            if (response.body) {
                ///window.location.href = 'http://www.google.com/';
                console.log('Adding new recipe: ' + response.body);
                window.location.href = response.body;
            }
        }, (error) => {
            console.error(error);
        }).add();
    }
}
RecipeCreator.ɵfac = function RecipeCreator_Factory(t) { return new (t || RecipeCreator)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_creator_service__WEBPACK_IMPORTED_MODULE_1__.Creator), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__.LiveAnnouncer)); };
RecipeCreator.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RecipeCreator, selectors: [["recipeCreator"]], viewQuery: function RecipeCreator_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 50, vars: 11, consts: [[1, "row", "border", "border-dark", "rounded-lg", "p-3", "m-1", "mb-3"], [1, "h3"], [1, "col", "col-10", "col-md-9", "p-2", "m-0", "d-inline-block"], ["type", "text", "name", "recipeName", "matInput", "", "placeholder", "Recipe name", 3, "ngModel", "ngModelChange"], [1, "col", "col-2", "col-md-3", "p-0", "m-0", "d-inline-block"], ["id", "addRecipeBtn", 1, "btn", "btn-light", "btn-block", 3, "click"], [3, "icon"], [1, "col", "col-12", "p-0", "m-0"], [1, "input-field"], ["matInput", "", "name", "recipeDesc", "cols", "100", "rows", "5", "placeholder", "Recipe preparation description", "required", "", 1, "text-dark", 3, "ngModel", "ngModelChange"], [1, "card", "table-responsive", "p-0", "m-0", "col-12"], ["id", "recipeTable", "mat-table", "", "matSort", "", 1, "mat-elevation-z8", "p-0", "m-0", "col-12", 3, "dataSource", "matSortChange"], ["matColumnDef", "name"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by name", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "weight"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by weight", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "ml-1", 4, "matCellDef"], ["matColumnDef", "kcal"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by kcal", 4, "matHeaderCellDef"], ["matColumnDef", "carbs"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by carbs", 4, "matHeaderCellDef"], ["matColumnDef", "fats"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by fats", 4, "matHeaderCellDef"], ["matColumnDef", "proteins"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by proteins", 4, "matHeaderCellDef"], ["matColumnDef", "actions"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "row", "mt-3", "pb-2"], [1, "col"], [1, "custom-file"], ["type", "file", "accept", "image/*", "id", "customFile", 1, "custom-file-input", 3, "disabled", "change"], ["for", "customFile", 1, "custom-file-label"], [1, "col-auto", "pl-sm-0"], ["type", "button", "ngbTooltip", "Upload", 1, "btn", "btn-light", "btn-block", 3, "disabled", "click"], ["class", "row mt-3 pb-2", 4, "ngIf"], ["class", "row col-12 mt-3 m-0 p-0 pb-2", 4, "ngIf"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by name"], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by weight"], ["mat-cell", "", 1, "ml-1"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by kcal"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by carbs"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by fats"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by proteins"], ["mat-button", "", 1, "btn", "btn-info", "ml-1", 3, "click"], ["mat-button", "", 1, "btn", "btn-danger", "ml-1", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "progress"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", 3, "ngStyle"], [1, "row", "col-12", "mt-3", "m-0", "p-0", "pb-2"], ["alt", "preview", 1, "rounded", "shadow", "col-12", "m-0", "p-0", 3, "src"]], template: function RecipeCreator_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Recipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "mat-divider")(4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "form", 2)(6, "mat-form-field")(7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RecipeCreator_Template_input_ngModelChange_7_listener($event) { return ctx.recipeName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4)(9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RecipeCreator_Template_button_click_9_listener() { return ctx.addRecipe(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7)(12, "mat-form-field", 8)(13, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RecipeCreator_Template_textarea_ngModelChange_13_listener($event) { return ctx.recipeDesc = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 10)(15, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("matSortChange", function RecipeCreator_Template_table_matSortChange_15_listener($event) { return ctx.announceSortChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](16, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, RecipeCreator_th_17_Template, 2, 0, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, RecipeCreator_td_18_Template, 2, 1, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](19, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, RecipeCreator_th_20_Template, 2, 0, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, RecipeCreator_td_21_Template, 3, 4, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](22, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, RecipeCreator_th_23_Template, 2, 0, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, RecipeCreator_td_24_Template, 3, 4, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](25, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, RecipeCreator_th_26_Template, 2, 0, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, RecipeCreator_td_27_Template, 3, 4, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](28, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, RecipeCreator_th_29_Template, 2, 0, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, RecipeCreator_td_30_Template, 3, 4, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](31, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, RecipeCreator_th_32_Template, 2, 0, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, RecipeCreator_td_33_Template, 3, 4, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](34, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, RecipeCreator_mat_header_cell_35_Template, 1, 0, "mat-header-cell", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, RecipeCreator_mat_cell_36_Template, 5, 2, "mat-cell", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, RecipeCreator_tr_37_Template, 1, 0, "tr", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, RecipeCreator_tr_38_Template, 1, 0, "tr", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 31)(40, "div", 32)(41, "div", 33)(42, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function RecipeCreator_Template_input_change_42_listener($event) { return ctx.handleFileInput($event.target.files); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 36)(46, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RecipeCreator_Template_button_click_46_listener() { return ctx.upload(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](48, RecipeCreator_div_48_Template, 5, 5, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, RecipeCreator_div_49_Template, 2, 1, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.recipeName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faPlus);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.recipeDesc);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.working);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.uploadFileLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.working);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.working);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadUrl == null ? null : ctx.uploadUrl.length);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgStyle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgForm, _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__.MatDivider, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRow, _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__.MatSortHeader, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__.FaIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DecimalPipe], encapsulation: 2 });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map