import Box from "./components/Box"


function App() {

  return (
    <div>
      <Box heading="Ts with React" count={23} func1={ () => alert("Dayummm bruhh!") }>
        <div style={{alignItems: "center",justifyContent: "center",display: "flex",color: "white",backgroundColor: "lightseagreen", width: "200px",height: "200px"}} >Hello there</div>
      </Box>
    </div>
  )
}

export default App
