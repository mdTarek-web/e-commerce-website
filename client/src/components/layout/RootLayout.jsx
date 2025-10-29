import React from 'react'
import Header from '../Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import ServicesTag from '../ServicesTag'

const RootLayout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <ServicesTag/>
      <Footer/>
    </>
  )
}

export default RootLayout