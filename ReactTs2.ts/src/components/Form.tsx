import React from "react";

type InputValType = string | number;

function Form<T extends InputValType>({
  label,
  value,
  setter,
}: {  
  label: string;
  value: T;
  setter:  React.Dispatch<React.SetStateAction<string | number>>
}) {
  return (
    <form onSubmit={ (e) => {
      e.preventDefault();
      console.log(value);
    } } >
      <label>{label}</label>
      <input type="text" value={value} onChange={ (e) => setter(e.target.value)  } />
      <button type="submit" >Submit</button>
    </form>
  );
}

export default Form
