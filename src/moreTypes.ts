let response: any = "42";

// let numericLength: number = response.length();
let numericLength: number = (response as string ).length // forcefull type-assertion

type Book = {
  name: string
}

let bookString = '{"name":"Harry Potter"}';

let bookObject =  JSON.parse(bookString) as Book;

console.log(bookObject.name)

const imputElement = document.getElementById("username") as HTMLInputElement

let value1: any;

value1 = "abcd";
value1 = [1,2,3,4];
value1 = 2.5;
value1 = true;

value1.toUpperCase()

let value2: unknown;

value2 = "abcd";
value2 = [1,2,3,4];
value2 = 2.5;
value2 = true;

(value2 as string ).toUpperCase(); // gives error cause we have to define the datatype beforehand


// try {
    
// } catch (error: any) {
//   console.log(error.message) //wrong
// }


try {

} catch (error) {
  if( error instanceof Error ) {
    console.log(error.message)
  }
  console.log(error)
}

const data: unknown = "abcd"
const strData: string = data as string

//never type

type Role = "admin" | "user" ;

function redirectBasedOnRole ( role: Role ): void {
  if (role === "admin") {
    console.log(`Redirecting to admin dashboard`);
    return;
  } else {
    console.log(`Redirecting to user dashboard`);
    return;
  } 
}

// never returning functions
function neverReturn(): never {
  while(true){}
}