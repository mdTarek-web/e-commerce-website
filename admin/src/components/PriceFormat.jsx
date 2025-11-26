import React from 'react'
import { twMerge } from 'tailwind-merge';

const PriceFormat = ({amount, className}) => {
  const formattedAmount = new Number (amount).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
  return (
    <span className={twMerge('text-base font-medium',className)}>
      {formattedAmount}
    </span>
  )
}

export default PriceFormat