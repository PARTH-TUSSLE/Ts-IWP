//PICK - lets us select some properties from an existing type
function updateUser(updatedProps) {
    // hit the DB to update the user details
}
const user = {
    id: 1,
    name: "Parth",
    age: 20,
    email: "abc@gmail.com",
    password: "123456",
};
const users = {
    "abc@123": {
        id: "abc@123",
        username: "Parth",
    },
    "abc@124": {
        id: "abc@124",
        username: "Chintu",
    },
};
// Maps are a JS thing unlike Records
// instead of this , we use Maps
users["abc@123"].id = "3";
const users2 = new Map();
users2.set("abc@123", { id: "abc@123", username: "Parth" });
users2.set("abc@124", { id: "abc@124", username: "Chintu" });
const userID = users2.get("abc@123");
const handleEvent = (event) => {
    return event;
};
handleEvent("mouseOver");
export {};
//# sourceMappingURL=moreTsAPIs.js.map