import { useState } from "react"
import Box from "./components/Box"
import Form from "./components/Form"


function App() {

  const [val, setVal] = useState<string | number>("");

  return (
    <div>
      <Box heading="Ts with React" count={23}  >
        <div style={{alignItems: "center",justifyContent: "center",display: "flex",color: "white",backgroundColor: "lightseagreen", width: "200px",height: "200px"}} >Hello there</div>
      </Box>
      <Form label="Search" value={val} setter={ setVal } />
    </div>
  )
}

export default App
