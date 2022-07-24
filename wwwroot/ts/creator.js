var Creator = /** @class */ (function () {
    function Creator(ingredient, amount) {
        this.ingredient = ingredient;
        this.amount = amount;
    }
    Creator.prototype.showAlert = function () {
        alert("".concat(this.ingredient, " ").concat(this.amount));
    };
    return Creator;
}());
//# sourceMappingURL=creator.js.map