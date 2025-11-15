import React from 'react'
import Title from '../components/Title'
import {useSelector} from "react-redux";
import Container from "../components/Container"
import {emptyCart} from "../assets/images"
import {Link} from "react-router"
import CartProduct from '../components/CartProduct';

const Cart = () => {
  const { products } = useSelector((state) => state.orebi);
  return (
    <Container>
      <Title>My Cart</Title>
      {products?.length > 0 ? 
      (<div className='py-10'>
        <div className='w-full h-20 bg-[#f5f7f7] text-black hidden lg:grid grid-cols-5 place-content-center px-6 text-lg font-semibold'>
          <h2 className='col-span-2'>Product</h2>
          <h2>Price</h2>
          <h2>Quantity</h2>
          <h2>Subtotal</h2>
        </div>
        <div className='mt-5'>
          {products?.map((item) => (
              <CartProduct key={item?._id} item={item}/>
          ))}
        </div>
      </div>) : 
      (<div className='py-10'>
          <img src={emptyCart} alt="emptyCart" className='max-w-80'/>
          <div className='mt-5 flex flex-col gap-2.5'>
            <h2 className='text-xl font-bold uppercase'>Your Cart feels lonely</h2>
            <p className='text-sm max-w-96 text-lightText'>Your Shopping cart lives to serve. Give it purpose - fill it with books, electronice, videos, etc.and make it happy.</p>
            <Link to={"/shop"} className='bg-black/80 text-white w-48 text-center rounded-md py-2 hover:bg-black hoverEffect'>Continue Shopping</Link>
          </div>
      </div>)}
    </Container>
  )
}

export default Cart