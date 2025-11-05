import React from 'react'
import Badge from './Badge'
import PriceContainer from './PriceContainer'
import AddToCartButton from './AddToCartButton'

const Product = ({ item }) => {
  return (
    <div className='w-full group pr-2 '>
      <div className='h-65 border border-gray-300 rounded-tr-md rounded-tl-md overflow-hidden relative'> 
        <div className='w-full h-full overflow-hidden bg-[#f3f3f3]'>
          <img src={item?.images[0]} alt="productImage" className='w-full h-full group-hover:scale-110 duration-300 object-cover'/>
        </div>
        <div className='absolute top-2 right-2'>
            {item?.offer && <Badge title="sale" className="rounded-sm"/>}
        </div>
       </div>
       <div className='max-w-80 py-3 flex flex-col gap-1 border-[1px] border-t-0 border-gray-300 px-5 rounded-b-md'>
        <p className='text-lg text-black font-bold'>{item?.name}</p>
        <PriceContainer item={item}/>
        <AddToCartButton item={item}/>
       </div>
    </div>
  )
}

export default Product