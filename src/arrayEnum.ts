const chiaFlavours: string[] = ["Chicken", "Eggs", "Fish"];
const groceryPrice: number[] = [2,3,45,3,3,2,33,3455,5,55,5,55,32,32324,32];

const rating: Array<number> = [4.5, 5.0];

type Pizza = {
  name: string,
  price: number
}

const menu: Pizza[] = [
  { name: "nepolitan", price: 399 },
  { name: "corn", price: 199 },
];

const cities: readonly string[] = ["Delhi", "Jaipur", "Pune"];
// cities.push("Dehradun"); // error

const table: number[][] = [
  [1,2,3],
  [2,3,4]
]

//TUPLES

let TupleType: [string, number];
TupleType = ["anva", 24];
// TupleType = [20, "fwie"] //error

//named tuples

const momoItems: [type: string, price: number] = ["veg", 23]

// E-NUMS

enum Size {
  SMALL,
  MEDIUM,
  LARGE
}

const size = Size.LARGE;

enum Status {
  PENDING = 100,
  SERVED, // 101 automtically
  CANCELLED // 102 automatically
}

enum PizzaType {
  CORN = "corn",
  ONION= "onion",
}

function makePizza ( type: PizzaType ) {
  console.log(type)
}

makePizza(PizzaType.CORN)
// makePizza("corn") // error

enum Random {
  id = 1,
  NAME = "Parth" // not standard practice
}

// constant enum
const enum Constant {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3
}

const s = Constant.LOW

let t: [string, number] = ["pizza", 299];
t.push("extra") // unexpected behaviour  

