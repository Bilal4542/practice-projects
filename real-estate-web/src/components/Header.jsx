import React, { useState } from 'react'
import {Link} from 'react-scroll'
import {FaXmark, FaBars} from 'react-icons/fa6'
import logo from '../assets/logo.png'
import { useDarkMode } from './DarkModeContext'
import { FaPhoneAlt, FaUserCircle } from 'react-icons/fa'



const Header = () => {
  const {darkMode,toggleDarkMode} = useDarkMode()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const navItems = [
    {
      link: 'Home',
      path: 'home'
    },
    {
      link: 'About',
      path: 'about'
    },
    {
      link: 'Properties',
      path: 'properties'
    },
    {
      link: 'Services',
      path: 'services'
    },
    {
      link: 'Client',
      path: 'client'
    },
    {
      link: 'Contact',
      path: 'contact'
    },
  ]

  return (
    <nav className={`${darkMode ? 'dark bg-black' : 'light bg-[#f3f3f3]'} flex justify-between items-center gap-4 px-4 lg:px-20 py-3 sticky top-0 z-30`}>
      <div id="logo">
        <img src={logo} alt="company logo" className='w-[120px] lg:w-[150px] dark:invert' />
      </div>
      <ul className='hidden lg:flex justify-center items-center gap-8'>
        {navItems.map(({link,path})=>(
          <Link key={path} className='text-black text-[15px] uppercase font-semibold cursor-pointer px-3 py-2 dark:text-white rounded-lg hover:bg-red-600 hover:text-white' to={path} spy={true} offset={-100} smooth={true}>{link}</Link>
        ))}
      </ul>
      {/* mobile icon menu start from here */}
      <div onClick={toggleMenu} className="flex justify-center items-center lg:hidden">
        <div>
          {isMenuOpen ? <FaXmark  className='text-black dark:text-white text-2xl cursor-pointer'/> : <FaBars  className='text-black dark:text-white text-2xl cursor-pointer'/>}
        </div>
      </div>
      <div className={`${isMenuOpen ? 'flex' : 'hidden'} w-full h-fit bg-slate-800 p-4 absolute top-[80px] left-0`} onClick={closeMenu}>
        <ul className='w-full flex flex-col justify-center items-center gap-2'>
          {navItems.map(({path,link})=>(
            <Link key={path} className='text-white font-semibold uppercase cursor-pointer p-3 rounded-lg hover:bg-red-600 hover:text-black w-full text-center' to={path} spy={true} offset={-100} smooth={true}>{link}</Link>
          ))}
        </ul>
      </div>
      {/* mobile icon menu ends here */}
      <div className="flex justify-center items-center gap-2 lg:gap-8">
        <div className="flex justify-center items-center gap-1 lg:gap-3">
          <FaPhoneAlt className='size-5 text-red-600'/>
          <h1 className='text-sm lg:text-lg text-black dark:text-white font-semibold'>000-999-8844</h1>
        </div>
        <FaUserCircle className='size-6 text-red-600'/>
      </div>
    </nav>
  )
}

export default Header
