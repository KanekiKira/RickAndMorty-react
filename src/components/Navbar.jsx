import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
        <NavLink className='link' to='/'>Home</NavLink>
        <NavLink className='link' to="/about" >About Us</NavLink>
        <NavLink className='link' to='/characters' >Characters</NavLink>
    </div>
  )
}

export default Navbar
