// //1. narrowing using typeof
// function getFood(item: string | number) {
//   if (typeof item === "string") {
//     return `Making one ${item}`; // -> all the . methods are according to the data type
//   }
//   return `Order no. ${item}`; // -> all the . methods are according to the data type
// }
// // 2. truthy/falsy narrowing
// function serveFood ( msg?: string ) {
//   if ( msg ) {
//     return `Serving ${msg}`;
//   }
//   return `Serving default `;
// }
// // 3. literal and equality narrowing
// function orderPizza ( size: "small" | "medium" | "large" | number ) {
//   if ( size === "small" ) {
//     return `Make a small pizza`;
//   }
//   if ( size === "medium" || size === "large" ) {
//     return `Make a bigger pizza`;
//   }
//   return `Make a pizza of size ${size} inches`; 
// }
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
console.log(serveMomos(momo1));
export {};
//# sourceMappingURL=typeNarrowing.js.map