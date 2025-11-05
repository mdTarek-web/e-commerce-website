import React from 'react'
import { twMerge } from 'tailwind-merge'
import toast from 'react-hot-toast'

const AddToCartButton = ({item,className}) => {
  return (
    <button onClick={()=>toast.success(`${item?.name} is clicked`)}
     className={twMerge("bg-black/90 text-white/90 text-sm font-medium py-2 rounded-md mt-2 hover:text-white hover:bg-black hoverEffect",className)}
    >Add to cart</button>
  )
}

export default AddToCartButton