//1. narrowing using typeof
function getFood(item) {
    if (typeof item === "string") {
        return `Making one ${item}`; // -> all the . methods are according to the data type
    }
    return `Order no. ${item}`; // -> all the . methods are according to the data type
}
// 2. truthy/falsy narrowing
function serveFood(msg) {
    if (msg) {
        return `Serving ${msg}`;
    }
    return `Serving default `;
}
// 3. literal and equality narrowing
function orderPizza(size) {
    if (size === "small") {
        return `Make a small pizza`;
    }
    if (size === "medium" || size === "large") {
        return `Make a bigger pizza`;
    }
    return `Make a pizza of size ${size} inches`;
}
//4. instanceOf narrowing
class SteamedMomos {
    name;
    serve() {
        return `Serving hot steamed momos`;
    }
    constructor(name) {
        this.name = name;
    }
}
class FriedMomos {
    name;
    serve() {
        return `Serving hot fried momos`;
    }
    constructor(name) {
        this.name = name;
    }
}
function serveMomos(momo) {
    if (momo instanceof SteamedMomos) {
        return momo.serve();
    }
    return momo.serve();
}
const momo1 = new FriedMomos("momo1");
//typeGaurding function
function isMomoOrder(obj) {
    // type-gaurding funcs usually accept any/unknown arguments cause we can't trust the incoming data, here the obj is MomoOrder means If this function returns true, then obj should be treated as a MomoOrder
    if (typeof obj === "object" && // type narrowing
        obj !== null &&
        typeof obj.filling === "string" &&
        typeof obj.temp === "number") {
        return true;
    }
    else {
        return false;
    }
}
function serveMomoWithCheck(item) {
    if (isMomoOrder(item)) {
        return `Serving momo with ${item.filling} filling at temp ${item.temp}`;
    }
    else {
        return `Serving default momo ${item}`;
    }
}
// const ex1: MomoOrder = { filling: "veggies", temp: 99 };
console.log(serveMomoWithCheck("99"));
function makeMomo(item) {
    switch (item.filling) {
        case "chicken":
            console.log("Chicken momo");
            break;
        case "veggies":
            console.log("Steamed momo");
            break;
        case "paneer":
            console.log("Paneer momo");
            break;
        default:
            console.log("momo naa hai!");
            break;
    }
}
makeMomo({ filling: "chicken", category: "non-veg" });
// type guarding on the basis of the property name
function eat(item) {
    if ("filling" in item) {
        /// do some work
    }
}
export {};
//unknown type
// function isStringArray ( arr: unknown ): arr is string[]  { // before calling, construct or access the values of an unknown data , we should tell us the DT beforehand
// }
//# sourceMappingURL=typeNarrowing.js.map