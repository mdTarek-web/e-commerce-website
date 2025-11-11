import React from 'react'
// import PriceFormat from "../../../admin/src/components/PriceFormat";
import PriceFormat from "./PriceFormat"
import { twMerge } from 'tailwind-merge'


const PriceContainer = ({item, className, priceStyle}) => {
  return (
    <div className={twMerge("flex items-center gap-2", className)}>
      <PriceFormat amount={item?.price + (item?.discountedPercentage * item?.price) / 100} className={twMerge("text-base font-normal text-lightText line-through", priceStyle)}/>
      <PriceFormat amount={item?.price} className={twMerge("text-black font-semibold", priceStyle)}/>
    </div>
  )
}

export default PriceContainer