import { useState } from "react"
import Box from "./components/Box"
import Form from "./components/Form"
interface Person {
  name: string,
  age: number
}

function App() {

  const [val, setVal] = useState<string | number>("");
  const [user, setUser] = useState<Person>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (user) {
    console.log(user.name, user.age);
    } else {
      console.log(`Fields are empty!`)
    }
  };

  return (
    <div>
      <Box heading="Ts with React" count={23}>
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            color: "white",
            backgroundColor: "lightseagreen",
            width: "200px",
            height: "200px",
          }}
        >
          Hello there
        </div>
      </Box>
      <Form label="Search" value={val} setter={setVal} />
      <h3>Registration</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          value={user?.name || ""}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setUser((prev) => ({ ...prev!, name: e.target.value }));
          }}
        />
        <input
          type="number"
          placeholder="age"
          value={user?.age || ""}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setUser((prev) => ({ ...prev!, age: Number(e.target.value)}));
          }}
        />
        <button>Register</button>
      </form>
    </div>
  );
}

export default App;
