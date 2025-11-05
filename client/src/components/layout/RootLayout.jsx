import React from 'react'
import Header from '../Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import ServicesTag from '../ServicesTag'
import { Toaster } from 'react-hot-toast'

const RootLayout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <ServicesTag/>
      <Footer/>
      <Toaster position="bottom-right" toastOption={{ 
      style: {
        background:"#000000",
        color:"#ffffff",
      },
    }}/>
    </>
  )
}

export default RootLayout