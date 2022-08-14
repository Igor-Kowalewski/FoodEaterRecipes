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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);











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
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__.MatAutocompleteModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _views_ingredientCreator_component__WEBPACK_IMPORTED_MODULE_2__["default"],
        _views_recipeCreator_component__WEBPACK_IMPORTED_MODULE_3__["default"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__.MatAutocompleteModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule], exports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__.MatAutocompleteModule,
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




class Creator {
    constructor(http) {
        this.http = http;
        this.ingredients = [];
    }
    getIngredients(prefix) {
        let url = "/api/Ingredients";
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders();
        headers.append('Content-Type', 'application/json');
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set("prefix", prefix);
        return this.http.get(url, { headers: headers, params: params })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
            this.ingredients = data; // tutaj trza poprawić 
            return;
        }));
    }
}
Creator.ɵfac = function Creator_Factory(t) { return new (t || Creator)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
Creator.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: Creator, factory: Creator.ɵfac });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_creator_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/creator.service */ 5664);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/autocomplete */ 8550);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);








function IngredientCreator_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ingredient_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ingredient_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ingredient_r2.name, " ");
} }
class IngredientCreator {
    // inicjalizacja serwisu Creator - pobieranie danych z API do backendu i z backendu do frontendu
    constructor(creator) {
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
    ngOnInit() {
        //this.creator.getIngredients("bread").subscribe();
    }
    // update listy składników na liście rozwijanej kontrolki Autocomplete
    updateIngredientList(prefix) {
        this.creator.getIngredients(this.prefix)
            .subscribe();
    }
    // znajduję pierwszy element z Autocomplete, który pokrywa się z szukanym wzorcem wybranym z listy
    setTemplateIngredient(ingredientSelected) {
        this.ingredientSelectedInAutocomplete = ingredientSelected;
        let temp = this.creator.ingredients.find((i) => { return i.name === ingredientSelected; });
        if (temp !== undefined) {
            this.ingredientSelectedIntoForm = temp;
        }
        console.log(this.ingredientSelectedIntoForm.name);
    }
}
IngredientCreator.ɵfac = function IngredientCreator_Factory(t) { return new (t || IngredientCreator)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_creator_service__WEBPACK_IMPORTED_MODULE_0__.Creator)); };
IngredientCreator.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IngredientCreator, selectors: [["ingredientCreator"]], inputs: { prefix: "prefix" }, decls: 20, vars: 8, consts: [[1, "row"], [1, "container"], [1, "col", "col-10", "col-md-9", "p-2", "m-0", "d-inline-block"], ["type", "text", "name", "prefix", "matInput", "", "placeholder", "Search ingredient", 3, "ngModel", "matAutocomplete", "ngModelChange"], ["panelWidth", "auto", 3, "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col", "col-2", "col-md-3", "p-0", "m-0", "d-inline-block"], ["id", "addIngredientBtn", 1, "btn", "btn-light", "btn-block"], [1, "fas", "fa-plus", "fa-1x"], [1, "col", "col-12", "p-0", "m-0", "d-inline-block", "text-center", "bg-dark", "rounded"], ["id", "ingredientAdded", 1, "p-0", "m-0", 2, "height", "38px"], [1, "col", "col-12"], ["type", "text", "name", "name", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "kcal", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "carbs", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "fats", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "proteins", 3, "ngModel", "ngModelChange"], [3, "value"]], template: function IngredientCreator_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "form", 2)(3, "mat-form-field")(4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function IngredientCreator_Template_input_ngModelChange_4_listener($event) { return ctx.prefix = $event; })("ngModelChange", function IngredientCreator_Template_input_ngModelChange_4_listener() { return ctx.updateIngredientList(ctx.prefix); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-autocomplete", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("optionSelected", function IngredientCreator_Template_mat_autocomplete_optionSelected_5_listener($event) { return ctx.setTemplateIngredient($event.option.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, IngredientCreator_mat_option_7_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7)(9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10)(12, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Testowy div!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "form", 12)(15, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function IngredientCreator_Template_input_ngModelChange_15_listener($event) { return ctx.ingredientSelectedIntoForm.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function IngredientCreator_Template_input_ngModelChange_16_listener($event) { return ctx.ingredientSelectedIntoForm.kcal = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function IngredientCreator_Template_input_ngModelChange_17_listener($event) { return ctx.ingredientSelectedIntoForm.carbs = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function IngredientCreator_Template_input_ngModelChange_18_listener($event) { return ctx.ingredientSelectedIntoForm.fats = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function IngredientCreator_Template_input_ngModelChange_19_listener($event) { return ctx.ingredientSelectedIntoForm.proteins = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.prefix)("matAutocomplete", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.creator.ingredients);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.ingredientSelectedIntoForm.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.ingredientSelectedIntoForm.kcal);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.ingredientSelectedIntoForm.carbs);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.ingredientSelectedIntoForm.fats);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.ingredientSelectedIntoForm.proteins);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__.MatAutocompleteTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm], encapsulation: 2 });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_creator_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/creator.service */ 5664);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);



function RecipeCreator_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r1.name);
} }
class RecipeCreator {
    constructor(creator) {
        this.creator = creator;
        this.ingredients = [];
        this.ingredients = creator.ingredients;
    }
}
RecipeCreator.ɵfac = function RecipeCreator_Factory(t) { return new (t || RecipeCreator)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_creator_service__WEBPACK_IMPORTED_MODULE_0__.Creator)); };
RecipeCreator.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RecipeCreator, selectors: [["recipeCreator"]], decls: 3, vars: 1, consts: [[1, "row"], [4, "ngFor", "ngForOf"]], template: function RecipeCreator_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RecipeCreator_li_2_Template, 2, 1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.ingredients);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], encapsulation: 2 });


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