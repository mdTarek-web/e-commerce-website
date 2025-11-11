import React from 'react'
import { GoTriangleDown } from "react-icons/go";

const ProductBanner = ({itemsPerPageFormBanner}) => {
  return (
    <div className='flex flex-col md:flex-row w-full justify-between'>
        <div>Sorting filter</div>
        <div className='flex items-center gap-2 text-black relative'>
            <label htmlFor="itemsPerPage">Show</label>
            <select className='w-full md:w-20 border-[1px] border-gray-200 py-1 px-4 cursor-pointer text-gray-500 text-base
            block appearance-none focus-within:outline-none focus-visible:border-gray-500'
            onChange={(e)=>itemsPerPageFormBanner(e.target.value)}>
                <option value="8">8</option>
                <option value="16">16</option>
                <option value="24">24</option>
                <option value="32">32</option>
            </select>
            <GoTriangleDown className='absolute text-sm right-3 top-2.5'/>
        </div>
    </div>
  )
}

export default ProductBanner