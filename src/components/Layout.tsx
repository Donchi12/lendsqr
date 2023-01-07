import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

function Layout() {
  return (
     <>
       <Navbar />
    <div className='dashboard-container'>
      <Sidebar /> 
      <div className='dashboard-wrapper'>
      <Outlet />
      </div>
      </div>
      </>
  )
}

export default Layout