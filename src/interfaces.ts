// To avoid repetition of signatures we make types/interfaces

function makePizza(order: {
  type: string;
  temp: number;
  extraCheese: boolean;
}) {
  console.log(order);
}

function servePizza(order: {
  type: string;
  temp: number;
  extraCheese: boolean;
}) {}
// repetition -> types can be used

type PizzaRecipe = {
  dough: number;
  topping: string;
  temp: number;
};

// INTERFACES - used to define the types of complex objects

interface Address {
  state: string;
  pincode: number;
}

interface User {
  name: string;
  age: number;
  address: Address;
}

let user1: User = {
  name: "Parth",
  age: 20,
  address: {
    state: "Haryana",
    pincode: 132114,
  },
};

function isLegal(user: User) {
  if (user.age >= 18) {
    return true;
  } else {
    return false;
  }
}

// Implementing Interfaces to classes

interface People {
  name: string,
  age: number,
  greet(): string
}

class Manager implements People {
  constructor ( public name: string, public age: number ) {
    this.name = name;
    this.age = age;
  }

  greet () {
    return "hi";
  }
}

abstract class People2 {
  name: string;
  age: number;
  constructor ( name: string, age: number ) {
    this.name = name;
    this.age = age;
  }
  abstract greet(): string;
  isLegal() {
    return this.age >= 18; // we can't have function definitions in interfaces but can have them in abstract classes
  }
}

// Types are almost similar to interfaces, but they allow intersections(&) and unions(|) which interfaces don't

interface point2D {
  x: number,
  y: number
}

// const point1: point2D = { x: 1, y: 3, name: "Parth", age: 20} // gives an error - Object literal may only specify known properties, and 'name' does not exist in type 'point2D'

// const point2: point2D = point1; // this doesn't give an error