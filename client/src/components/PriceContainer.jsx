import React from 'react'
// import PriceFormat from "../../../admin/src/components/PriceFormat";
import PriceFormat from "./PriceFormat"
import { twMerge } from 'tailwind-merge'


const PriceContainer = ({item, className}) => {
  return (
    <div className={twMerge("flex items-center gap-2", className)}>
      <PriceFormat amount={item?.price + (item?.discountedPercentage * item?.price) / 100} className="text-base font-normal text-lightText line-through"/>
      <PriceFormat amount={item?.price} className="text-black font-semibold"/>
    </div>
  )
}

export default PriceContainer