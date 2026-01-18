import React, { useState } from "react";

interface OrderFormProps {
  onSubmit( order: { name: string, cups: number } ): void,
}

function OrderForm({onSubmit}: OrderFormProps) {

  const [name, setName] = useState<string>("");
  const [cups, setCups] = useState<number>(0);

  function handleSubmit ( e: React.FormEvent<HTMLFormElement> ) {
    e.preventDefault();
    onSubmit({ name, cups });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Fruit Name :</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setName(e.target.value);
        }}
      />
      <label htmlFor="cups">Cups</label>
      <input
        type="number"
        id="cups"
        value={cups}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setCups(Number(e.target.value));
        }}
      />
      <button type="submit" >Place Order</button>
    </form>
  );
}

export default OrderForm
