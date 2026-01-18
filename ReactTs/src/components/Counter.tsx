import { useState } from "react";

export default function Counter( ) {
  const [counter, setCounter] = useState<number>(0);
  return (
    <>
      <div>
        <p>No. of orders = {counter}</p>
        <button onClick={() => setCounter((prevcounter) => prevcounter + 1)} >Order one more</button>
      </div>
    </>
  )
}