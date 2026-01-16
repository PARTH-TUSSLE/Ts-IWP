let followers = 10;
followers = "1M";
let apiReqStatus = "pending";
// apiReqStatus = "done" // error
const orders = ['23', '43', '42', '69'];
let currOrder; // default type -> any (always try to avoid any)
for (const order of orders) {
    if (order === '69') {
        currOrder = order;
    }
}
console.log(currOrder);
export {};
//# sourceMappingURL=unionANDany.js.map