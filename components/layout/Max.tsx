import { ReactNode } from "react"


type Props = {
  children: ReactNode;
  className?:string
}

function Max({ children,className }: Props) {
  return (
    <div className={`max-w-3xl px-2 m-auto ${className}`}>
      {children}
    </div>
  )
}

export default Max