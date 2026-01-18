const chiaFlavours = ["Chicken", "Eggs", "Fish"];
const groceryPrice = [2, 3, 45, 3, 3, 2, 33, 3455, 5, 55, 5, 55, 32, 32324, 32];
const rating = [4.5, 5.0];
const menu = [
    { name: "nepolitan", price: 399 },
    { name: "corn", price: 199 },
];
const cities = ["Delhi", "Jaipur", "Pune"];
// cities.push("Dehradun"); // error
const table = [
    [1, 2, 3],
    [2, 3, 4]
];
//TUPLES
let TupleType;
TupleType = ["anva", 24];
// TupleType = [20, "fwie"] //error
//named tuples
const momoItems = ["veg", 23];
// E-NUMS
var Size;
(function (Size) {
    Size[Size["SMALL"] = 0] = "SMALL";
    Size[Size["MEDIUM"] = 1] = "MEDIUM";
    Size[Size["LARGE"] = 2] = "LARGE";
})(Size || (Size = {}));
const size = Size.LARGE;
var Status;
(function (Status) {
    Status[Status["PENDING"] = 100] = "PENDING";
    Status[Status["SERVED"] = 101] = "SERVED";
    Status[Status["CANCELLED"] = 102] = "CANCELLED"; // 102 automatically
})(Status || (Status = {}));
var PizzaType;
(function (PizzaType) {
    PizzaType["CORN"] = "corn";
    PizzaType["ONION"] = "onion";
})(PizzaType || (PizzaType = {}));
function makePizza(type) {
    console.log(type);
}
makePizza(PizzaType.CORN);
// makePizza("corn") // error
var Random;
(function (Random) {
    Random[Random["id"] = 1] = "id";
    Random["NAME"] = "Parth"; // not standard practice
})(Random || (Random = {}));
// constant enum
var Constant;
(function (Constant) {
    Constant[Constant["LOW"] = 1] = "LOW";
    Constant[Constant["MEDIUM"] = 2] = "MEDIUM";
    Constant[Constant["HIGH"] = 3] = "HIGH";
})(Constant || (Constant = {}));
const s = Constant.LOW;
let t = ["pizza", 299];
t.push("extra"); // unexpected behaviour  
export {};
//# sourceMappingURL=arrayEnum.js.map