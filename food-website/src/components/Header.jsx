import React from 'react'
import logo from '../assets/logo1.png'
import { RxCaretDown } from "react-icons/rx";
import { useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { CiDiscount1, CiUser, CiShoppingCart } from "react-icons/ci";
import { IoIosHelpCircleOutline } from "react-icons/io";
const Header = () => {
    const [toggle, setToogle] = useState(false)

    const showSideMenu = () => {
        setToogle(true)
    }
    const hideSideMenu = () => {
        setToogle(false)
    }
    const navLinks = [
      {
        icon: <IoSearchOutline/>,
        name: 'Search'
      },
      {
        icon: <CiDiscount1/>,
        name: 'Offers',
        sup: 'New'
      },
      {
        icon: <IoIosHelpCircleOutline/>,
        name: 'Help'
      },
      {
        icon: <CiUser/>,
        name: 'Sign In'
      },
      {
        icon: <CiShoppingCart/>,
        name: 'Cart'
      },
    ]
  return (
    <>
    <div onClick={hideSideMenu} className={`bg-black/60 fixed w-full h-full duration-500  ${toggle ? 'opacity-100' : 'opacity-0'} ${toggle ? 'visible' : 'hidden'}`}>
    <div onClick={(e)=>{e.stopPropagation();}} className={`absolute w-[500px] h-full duration-700 bg-white  ${toggle ? 'left-0' : '-left-full'}`}>
    </div>
    </div>
    <header className='p-[15px] shadow-xl'>
      <div className='w-[1200px] mx-auto flex items-center gap-4'>
        <div className='w-[40px]'>
            <img src={logo} className='w-full' alt="" />
        </div>
        <div className=''>
            <span className='font-bold border-b-[3px] border-black'>Kohat Road</span> Peshawar, Pakistan <RxCaretDown onClick={showSideMenu} size={25} className='cursor-pointer font-bold text-orange-500 inline'/>
        </div>
        <nav className='ml-auto'>
          <ul className='flex items-center gap-6 text-[18px] font-semibold'>
            {
              navLinks.map((link,index) => (
                <li className='flex items-center gap-1 hover:text-orange-500 duration-300 cursor-pointer'>
                  {link.icon}
                  {link.name}
                  <sup>{link.sup}</sup>
                </li>
               ) )
            }
          </ul>
        </nav>
      </div>
    </header>
    </>
  )
}

export default Header
