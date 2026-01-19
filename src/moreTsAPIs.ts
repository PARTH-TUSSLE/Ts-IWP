//PICK - lets us select some properties from an existing type

interface User {
  id: number,
  name: string,
  age: number,
  email: string,
  password: string
}

type updateProps = Pick<User, "name" | "age" | "email">

function updateUser (updatedProps: UpdatedPropsOptional) {
  // hit the DB to update the user details
}

//PARTIAL - makes all properties makes optional

type UpdatedPropsOptional = Partial<updateProps>;

const user: Readonly<User> = {
  id: 1,
  name: "Parth",
  age: 20,
  email: "abc@gmail.com",
  password: "123456",
};

// user.name = "Chintu"; // gives error 

// RECORDS  and MAPS

type User2 = {
  id: string,
  username: string
}

type UsersObj = {
  [key: string]: User2
}

const users: UsersObj2 = { // instead of type UsersObj
  "abc@123": {
    id: "abc@123",
    username: "Parth",
  },
  "abc@124": {
    id: "abc@124",
    username: "Chintu",
  },
};
 
// to fix this syntax, records were introduced

//Records let us give cleaner syntax to objects - TS thing

// type UsersObj = {
//   [key: string]: User2;
// }; instead of this

type UsersObj2 = Record<string, User2>;

// Maps are a JS thing unlike Records
// instead of this , we use Maps
users["abc@123"]!.id = "3"; 

const users2 = new Map<string, User2>();
users2.set("abc@123",{id: "abc@123",username: "Parth" })
users2.set("abc@124", { id: "abc@124", username: "Chintu" });
const userID = users2.get("abc@123");

// EXCLUDE 

type EventType = "onClick" | "mouseOver" | "onScroll";

type ExcludeEventType = Exclude<EventType, "onClick">;

const handleEvent = ( event: ExcludeEventType ): string => {
  return event;
}

handleEvent("mouseOver");



