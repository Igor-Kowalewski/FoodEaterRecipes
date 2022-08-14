"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Creator = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var Creator = /** @class */ (function () {
    function Creator(http) {
        this.http = http;
        this.ingredients = [];
    }
    Creator.prototype.getIngredients = function (prefix) {
        var _this = this;
        var url = "/api/Ingredients";
        var headers = new http_1.HttpHeaders();
        headers.append('Content-Type', 'application/json');
        var params = new http_1.HttpParams().set("prefix", prefix);
        return this.http.get(url, { headers: headers, params: params })
            .pipe((0, operators_1.map)(function (data) {
            _this.ingredients = data; // tutaj trza poprawić 
            return;
        }));
    };
    Creator = __decorate([
        (0, core_1.Injectable)()
    ], Creator);
    return Creator;
}());
exports.Creator = Creator;
