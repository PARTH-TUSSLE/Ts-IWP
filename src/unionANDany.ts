let followers: number | string = 10;
followers = "1M";

let apiReqStatus: "pending" | "success" | "error" = "pending";

// apiReqStatus = "done" // error

const orders = ['23', '43', '42', '69'];

let currOrder: string | undefined ; // default type -> any (always try to avoid any)

for (const order of orders) {
  if ( order === '69' ) {
  currOrder = order;
  }
}

console.log(currOrder);
