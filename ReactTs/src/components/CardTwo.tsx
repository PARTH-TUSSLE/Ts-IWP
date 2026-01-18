import type { PropsWithChildren, ReactNode } from "react";

interface CardTwoProps extends PropsWithChildren {
  title: string,
  footer?: ReactNode 
}

function CardTwo({title, footer, children}: CardTwoProps) {
  return (
    <section>
      <h2>{title}</h2>
      <div>{children}</div>
      {footer && <footer>{footer}</footer>}
    </section>
  )
}

export default CardTwo
