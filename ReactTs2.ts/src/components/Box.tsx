import type { ReactNode } from "react";

type BoxProps = {
  heading: string;
  count: number;
  func1?: () => void,
  children: ReactNode
}

function Box( {heading, count, func1, children}:BoxProps ) {
  {func1 && func1()};
  return (
    <>
      <h1>{heading}</h1>
      <p>{count}</p>
      {children}
    </>
  );
}

export default Box
