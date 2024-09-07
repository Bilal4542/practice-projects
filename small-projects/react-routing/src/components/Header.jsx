import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <nav>
        <ul className='flex items-center gap-5 font-semibold justify-center my-4'>
            <li> <Link to={'/'}> Home </Link></li>
            <li> <Link to={'/about'}> About </Link></li>
            <li> <Link to={'/contact'}> Contact </Link></li>
            <li> <Link to={'/services'}> Services </Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
