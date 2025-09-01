import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = ({children}) => {
  return (
        <div className="min-h-screen text-slate-900 ">   
      <Navbar/>
      <Outlet />
      <Footer/>
        </div>

  )
}

export default Layout