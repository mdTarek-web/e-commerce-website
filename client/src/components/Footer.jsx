import React from 'react'
import Container from "./Container"
import Title from "./Title"
import SocialLinks from './SocialLinks'
import { Link } from "react-router-dom"
import { paymentCard } from "../assets/images/index"

const shopArray = [
  { title: "Accessories", link: "/accessories"},
  { title: "Cloths", link: "/shop"},
  { title: "Electronic", link: "/shop"},
  { title: "Home Appliances", link: "/shop"},
  { title: "New Arrivals", link: "/shop"},
];
const AccountArray = [
  { title: "Profile", link: "/profile"},
  { title: "Orders", link: "/orders"},
  { title: "Addresses", link: "/addresses"},
  { title: "Account Detail", link: "/profile"},
  { title: "Privacy", link: "/profile"},
];

const Footer = () => {
  return (
    <div className="w-full bg-[#1b1b1b] py-10 text-white/80">
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
       {/* first */}
        <div className='col-span-2'>
          <div className='flex flex-col gap-6'>
            <Title className="text-xl">More about Orebi Shop</Title>
            <p className='text-sm w-full lg:w-[80%]'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Laboriosam voluptate ipsa mollitia. Mollitia nulla dicta ipsum ab nobis maiores rerum?
            </p>
            <SocialLinks/>
          </div>
        </div>
        {/* second */}
        <div>
          <Title className="text-xl mb-6">Shop</Title>
          <div className='flex flex-col gap-2'>
            {AccountArray?.map((item)=>(
              <Link key={item?.title} to={item?.link}
              className='text-sm text-lightText hover:text-white hover:underline decoration-[1px]
              decoration-gray-500 underline-offset-2 cursor-pointer'>
                {item?.title}
              </Link>
            ))}
          </div>
        </div>
        {/* third */}
         <div>
          <Title className="text-xl mb-6">Your account</Title>
          <div className='flex flex-col gap-2'>
            {shopArray?.map((item)=>(
              <Link key={item?.title} to={item?.link}
              className='text-sm text-lightText hover:text-white hover:underline decoration-[1px]
              decoration-gray-500 underline-offset-2 cursor-pointer'>
                {item?.title}
              </Link>
            ))}
          </div>
        </div>
        {/* Fourth */}
        <div className='col-span-2 flex flex-col items-center w-full'>
          <Title className="text-xl mb-6">Subscribe to our newsletter.</Title>
          <p className='text-sm text-lightText text-center'>Lorem ipsum dolor sit amet.</p>
          <div className='my-3'>
             <div className='flex items-center gap-2'>
              <input type="text" placeholder='insert your email.....*' className='w-full h-12 
              border-b text-lightText border-gray-400 bg-transparent px-4 text-lg placeholder:text-sm outline-none'/>
              <button className='px-6 py-2  border border-gray-700 hover:border-gray-400 duration-300 rounded-md'>Submit</button>
             </div>
          </div>
          <img src={paymentCard} alt="" />
        </div>
      </Container>
    </div>
  )
}

export default Footer