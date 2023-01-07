import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="header">

         <Link to="/" >
           <img src='/header-logo.svg'  alt='logo' />
          </Link>
        </nav>
  )
}

export default Navbar