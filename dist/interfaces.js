// To avoid repetition of signatures we make types/interfaces
function makePizza(order) {
    console.log(order);
}
function servePizza(order) { }
let user1 = {
    name: "Parth",
    age: 20,
    address: {
        state: "Haryana",
        pincode: 132114,
    },
};
function isLegal(user) {
    if (user.age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
class Manager {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    greet() {
        return "hi";
    }
}
class People2 {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    isLegal() {
        return this.age >= 18; // we can't have function definitions in interfaces but can have them in abstract classes
    }
}
export {};
// const point1: point2D = { x: 1, y: 3, name: "Parth", age: 20} // gives an error - Object literal may only specify known properties, and 'name' does not exist in type 'point2D'
// const point2: point2D = point1; // this doesn't give an error
//# sourceMappingURL=interfaces.js.map