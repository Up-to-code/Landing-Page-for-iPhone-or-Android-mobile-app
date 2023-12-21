import { FC, ReactNode } from 'react'

interface ButtonProps {
  children:ReactNode
}

const Button: FC<ButtonProps> = ({children}) => {
  return <div className='bg-prim text-white px-6 py-2 w-max mt-8 rounded-md cursor-pointer'>{children}</div>
}

export default Button