interface Juice {
  flavour: string,
  price: number
  milk? : boolean
}

const juice1: Juice = { flavour: "Apple", price: 60 }

interface Shop {
  readonly id: number,
  name: string
}

const s: Shop = {id: 1, name: "cafe"}
// s.id = 2 //error

interface DiscountCalculator {
  (price: number): number; // method inside interfaces
}

const apply50: DiscountCalculator = (p) => {
  return p * 0.5;
}

interface CoffeeMachine {
  start(price: number): void;
  stop(price: number): void;
}

const machine: CoffeeMachine = {
  start(){
    console.log("start");
  },
  stop() {
    console.log("stop");
  }
}

// INDEX SIGNATURES

interface PizzaRatings {
  [flavour: string]: number
}

const ratings: PizzaRatings = {
  "corn": 4,
  "veg-extravaganza": 4.5
}

// interfaces merge together

interface User {
  name: string
}

interface User {
  age: number
}

const u: User = {
  name: "Parth",
  age: 20
}

// manually

interface A {
  a: number
}

interface B {
  b: number;
}

interface C extends A,B {}


// +++++++++++++++++++++++++++++++++++++++++++++++ GENERICS ++++++++++++++++++++++++++++++++++++++++++++

function wrapInArray<T>(item: T): T[] {
  return [item];
}

wrapInArray("abcdefgh");
wrapInArray(42);
wrapInArray({flavour: "Parth"});

function pair<A,B> (a: A, b: B): [A,B] {
  return [a, b];
}

pair("abc", 20);
pair("skg", "kwgrb");
pair({name: "Parth"}, 20);

// generic interface 

interface Box<T> {
  content: T
}

const numberBox: Box<number> = {
  content: 10
}

const stringBox: Box<string> = {
  content: "abc"
}

interface ApiPromise<T> {
  status: number,
  data: T
}

const response: ApiPromise<{flavour: string}> = {
  status: 200,
  data: {
    flavour: "grape"
  }
}

const func =<CustomType> (n : CustomType): CustomType => {
  return n;
}

type Person = {
  name: string,
  age: number
}

type Person2 = {
  name: string;
  age: number;
  email: string;
};

const random = <T, U extends Person >( p1: T, p2: U ): {p1: T, p2: U} => {
  return { p1, p2 };
}

random<Person, Person2>({ name: "Parth", age: 20 }, { name: "Parth", age: 20, email: "abc@gmail.com" });


type User2 = {
  name: string;
  age: number;
};

const users: User2[] = [
  { name: "Parth", age: 20 },
  { name: "Parth", age: 21 },
  { name: "Shivang", age: 20 },
  { name: "Krish", age: 21 },
  { name: "Kanav", age: 19 },
  { name: "Shivang", age: 19 },
];

const filterFromUsers = <T, U extends keyof T>(
  arr: T[],
  key: U,
  value: T[U],
): T[] => {
  return arr.filter((user) => user[key] === value);
};

const filterByName = filterFromUsers(users, "name", "Parth");
console.log(filterByName);

const filterByAge = filterFromUsers(users, "age", 23);
console.log(filterByAge);

const filterByName2 = filterFromUsers(users, "name", "Shivang");
console.log(filterByName2);

console.log(filterFromUsers(users, "age", 19));


