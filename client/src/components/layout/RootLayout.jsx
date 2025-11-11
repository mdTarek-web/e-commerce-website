import React from 'react'
import Header from '../Header'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Footer from '../Footer'
import ServicesTag from '../ServicesTag'
import { Toaster } from 'react-hot-toast'
import { Provider } from "react-redux"
import store from '../../redux/Store'


const RootLayout = () => {
  return (
    <Provider store={store}>
      <Header/>
      <ScrollRestoration/>
      <Outlet/>
      <ServicesTag/>
      <Footer/>
      <Toaster position="bottom-right" toastOption={{ 
      style: {
        background:"#000000",
        color:"#ffffff",
      },
    }}/>
    </Provider>
  )
}

export default RootLayout