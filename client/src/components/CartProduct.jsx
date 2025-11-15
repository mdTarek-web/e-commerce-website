import React from 'react'
import {ImCross} from "react-icons/im"
import toast from "react-hot-toast"

const CartProduct = ({item}) => {
  return (
    <div className='w-full grid grid-cols-5 mb-4 border py-2'>
      <div className='flex col-span-5 md:col-span-2 items-center gap-4 ml-4'>
          <ImCross onClick={()=>
            toast.success(`${item?.name.substring(0, 10)}...is deleted successfully!`)
          } className='text-black hover:text-red-500 hoverEffect cursor-pointer'/>
        <img src={item?.images[0]} alt="productImage" className='w-20 h-20 object-cover'/>
        <h1 className='font-semibold'>{item?.name}</h1>
      </div>
      <div>
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default CartProduct