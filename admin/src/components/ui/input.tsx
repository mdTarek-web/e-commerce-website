import React from 'react'
import { cn } from './cn'

const Input = ({type, className, placeholder, id, name, onChange, value}) => {
  return (
    <input type={type} id={id} name={name} placeholder={placeholder} onChange={onChange} value={value} 
    className={cn("border px-4 py-1 border-gray-500 rounded-md max-w-lg", className)}
    />
  )
}

export default Input