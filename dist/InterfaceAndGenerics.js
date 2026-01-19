const juice1 = { flavour: "Apple", price: 60 };
const s = { id: 1, name: "cafe" };
const apply50 = (p) => {
    return p * 0.5;
};
const machine = {
    start() {
        console.log("start");
    },
    stop() {
        console.log("stop");
    }
};
const ratings = {
    "corn": 4,
    "veg-extravaganza": 4.5
};
const u = {
    name: "Parth",
    age: 20
};
// +++++++++++++++++++++++++++++++++++++++++++++++ GENERICS ++++++++++++++++++++++++++++++++++++++++++++
function wrapInArray(item) {
    return [item];
}
wrapInArray("abcdefgh");
wrapInArray(42);
wrapInArray({ flavour: "Parth" });
function pair(a, b) {
    return [a, b];
}
pair("abc", 20);
pair("skg", "kwgrb");
pair({ name: "Parth" }, 20);
const numberBox = {
    content: 10
};
const stringBox = {
    content: "abc"
};
const response = {
    status: 200,
    data: {
        flavour: "grape"
    }
};
const func = (n) => {
    return n;
};
const random = (p1, p2) => {
    return { p1, p2 };
};
random({ name: "Parth", age: 20 }, { name: "Parth", age: 20, email: "abc@gmail.com" });
const users = [
    { name: "Parth", age: 20 },
    { name: "Parth", age: 21 },
    { name: "Shivang", age: 20 },
    { name: "Krish", age: 21 },
    { name: "Kanav", age: 19 },
    { name: "Shivang", age: 19 },
];
const filterFromUsers = (arr, key, value) => {
    return arr.filter((user) => user[key] === value);
};
const filterByName = filterFromUsers(users, "name", "Parth");
console.log(filterByName);
export {};
//# sourceMappingURL=InterfaceAndGenerics.js.map