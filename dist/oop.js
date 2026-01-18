class Pizza {
    type;
    price;
    constructor(type, price) {
        this.type = type;
        this.price = price;
        this.type = type;
        this.price = price;
    }
}
const pizza1 = new Pizza("corn", 199);
class Pizza1 {
    type = "VegExtravaganza"; // everywhere
    #balance = 100; // another syntax for private
    secretIngredient = "oregano"; // only in base class
    reveal() {
        console.log(this.secretIngredient); // cant be directly accessed , only through functions
        console.log(this.#balance);
    }
    shopName = "Denny's"; // base and inherited class
}
class Cup {
    capacity = 350;
    constructor(capacity) {
        this.capacity = capacity;
    }
}
// GETTTERS , SETTERS
class modernClass {
    _sugar = 2; // _ -> private variables naming convention
    //getter
    get sugar() {
        return this._sugar;
    }
    // setter
    set sugar(val) {
        if (val > 5)
            throw new Error("Too sweet");
        this._sugar = val;
    }
}
const c = new modernClass();
c.sugar = 3;
// static members
class StaticClass {
    static name = "Parth";
}
console.log(StaticClass.name);
// abstract class (abstract classes are never used to make objects, they're used to define functions mostly)
class Drink {
}
class myDrink extends Drink {
    make() {
        console.log(`Making a drink`);
    }
}
// composition of classes (another way of inheritance)
class Heater {
    heat() { }
}
class CoffeMaker {
    heater;
    constructor(heater) {
        this.heater = heater;
    }
    make() {
        this.heater.heat();
    }
}
export {};
//# sourceMappingURL=oop.js.map