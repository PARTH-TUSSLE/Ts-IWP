let response = "42";
// let numericLength: number = response.length();
let numericLength = response.length; // forcefull type-assertion
let bookString = '{"name":"Harry Potter"}';
let bookObject = JSON.parse(bookString);
console.log(bookObject.name);
const imputElement = document.getElementById("username");
let value1;
value1 = "abcd";
value1 = [1, 2, 3, 4];
value1 = 2.5;
value1 = true;
value1.toUpperCase();
let value2;
value2 = "abcd";
value2 = [1, 2, 3, 4];
value2 = 2.5;
value2 = true;
value2.toUpperCase(); // gives error cause we have to define the datatype beforehand
// try {
// } catch (error: any) {
//   console.log(error.message) //wrong
// }
try {
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
    console.log(error);
}
const data = "abcd";
const strData = data;
function redirectBasedOnRole(role) {
    if (role === "admin") {
        console.log(`Redirecting to admin dashboard`);
        return;
    }
    else {
        console.log(`Redirecting to user dashboard`);
        return;
    }
}
// never returning functions
function neverReturn() {
    while (true) { }
}
export {};
//# sourceMappingURL=moreTypes.js.map