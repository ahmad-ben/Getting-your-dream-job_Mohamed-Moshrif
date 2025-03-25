var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pizza = /** @class */ (function () {
    function Pizza(pizzaName) {
        this.pizzaName = pizzaName;
    }
    Pizza.prototype.makeBase = function () {
        console.log("Making ".concat(this.pizzaName, " pizza base."));
    };
    ;
    Pizza.prototype.addToppings = function () {
        console.log("Add ".concat(this.pizzaName, " to our pizza."));
    };
    ;
    Pizza.prototype.bakePizza = function () {
        console.log("Bake the ".concat(this.pizzaName, " pizza."));
    };
    ;
    Pizza.prototype.makingPizza = function () {
        this.makeBase();
        this.addToppings();
        this.bakePizza();
    };
    ;
    return Pizza;
}());
;
var ChickenPizza = /** @class */ (function (_super) {
    __extends(ChickenPizza, _super);
    function ChickenPizza() {
        return _super.call(this, "Chicken") || this;
    }
    ;
    return ChickenPizza;
}(Pizza));
;
var BeefPizza = /** @class */ (function (_super) {
    __extends(BeefPizza, _super);
    function BeefPizza() {
        return _super.call(this, "Beef") || this;
    }
    ;
    return BeefPizza;
}(Pizza));
;
var CheesePizza = /** @class */ (function (_super) {
    __extends(CheesePizza, _super);
    function CheesePizza() {
        return _super.call(this, "Cheese") || this;
    }
    ;
    return CheesePizza;
}(Pizza));
;
var ShrimpPizza = /** @class */ (function (_super) {
    __extends(ShrimpPizza, _super);
    function ShrimpPizza() {
        return _super.call(this, "Shrimp") || this;
    }
    ;
    return ShrimpPizza;
}(Pizza));
;
var chosePizza = function (pizzaNum) {
    var pizzaIns = null;
    switch (pizzaNum) {
        case 1:
            pizzaIns = new ChickenPizza();
            break;
        case 2:
            pizzaIns = new BeefPizza();
            break;
        case 3:
            pizzaIns = new CheesePizza();
            break;
        case 4:
            pizzaIns = new ShrimpPizza();
            break;
    }
    if (!pizzaIns)
        return console.log("Invalid Input!!");
    pizzaIns.makingPizza();
};
chosePizza(1);
console.log("=============================================================");
chosePizza(2);
console.log("=============================================================");
chosePizza(3);
console.log("=============================================================");
chosePizza(4);
console.log("=============================================================");
chosePizza(5);
