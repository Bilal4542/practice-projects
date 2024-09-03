import React, { useState } from 'react'
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import ResponsiveMenu from '../ResponsiveMenu/ResponsiveMenu';
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";

export const navLinks = [
    {
        id: '1',
        name: 'Home',
        link: '/#'
    },
    {
        id: '2',
        name: 'About',
        link: '/#about'
    },
    {
        id: '3',
        name: 'Cars',
        link: '/#cars'
    },
    {
        id: '4',
        name: 'Booking',
        link: '/#booking'
    },
]

const Navbar = ({theme,setTheme}) => {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }
  return (
    <nav className='shadow-md bg-white dark:bg-dark dark:text-white duration-300 relative z-40'>
      <div className="container py-3 md:py-0">
        <div className="flex justify-between items-center">
            <div>
                <h1 className='text-3xl font-bold font-serif'>Car Rental</h1>
            </div>
            <div className='hidden md:block'>
                <ul className='flex items-center gap-8'>
                    {navLinks.map((data) => 
                        <li className='py-4' key={data.id}>
                            <a href={data.link} className='py-2 hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-500 text-lg font-medium'>{data.name}</a>
                        </li>
                    )}
                </ul>
            </div>
            <div className='flex items-center gap-3'>
            {/* dark mood icons */}
            <div>
                {
                    theme === 'dark' ? (<BiSolidSun onClick={() => setTheme('light')} className='text-2xl cursor-pointer'/>) : (<BiSolidMoon onClick={() => setTheme('dark')} className='text-2xl cursor-pointer'/>)
                }
            </div>
            {/* hamburger icons */}
            <div className='md:hidden'>
                {showMenu?(<HiMenuAlt1 onClick={toggleMenu} size={30} className='cursor-pointer transition-all'/>):(<HiMenuAlt3 onClick={toggleMenu} size={30} className='cursor-pointer transition-all'/>)}
                </div>
                </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </nav>
  )
}

export default Navbar
