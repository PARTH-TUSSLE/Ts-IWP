// object type definition

let person: {
  name: string;
  age: number;
  isAdult: boolean
}

person = {
  name: "Parth",
  age: 20,
  isAdult: true
}

type Brew = {
  brewTime: number
}

const coffee = {
  brewTime: 20,
  beans: "Arabica"// gives an error if type is defined
}

const tea: Brew = coffee // -> DUCK Typing

