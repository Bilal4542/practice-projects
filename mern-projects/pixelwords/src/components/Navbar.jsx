import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Link>
        <img className='w-16' src={logo} alt="" />
      </Link>
    </div>
  )
}

export default Navbar
