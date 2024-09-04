import React from 'react'
import logo from '../assets/logo1.png'
import { RxCaretDown } from "react-icons/rx";
import { useState } from 'react';

const Header = () => {
    const [toggle, setToogle] = useState(false)

    const showSideMenu = () => {
        setToogle(true)
    }
    const hideSideMenu = () => {
        setToogle(false)
    }
  return (
    <>
    <div onClick={hideSideMenu} className={`bg-black/60 fixed w-full h-full duration-500  ${toggle ? 'opacity-100' : 'opacity-0'} ${toggle ? 'visible' : 'hidden'}`}>
    <div className={`absolute w-[500px] h-full duration-700 bg-white  ${toggle ? 'left-0' : '-left-full'}`}>

    </div>
    </div>
    <header className='p-[15px] shadow-xl'>
      <div className='w-[1200px] mx-auto border border-red-500 flex items-center gap-4'>
        <div className='w-[40px]'>
            <img src={logo} className='w-full' alt="" />
        </div>
        <div className=''>
            <span className='font-bold border-b-[3px] border-black'>Kohat Road</span> Peshawar, Pakistan <RxCaretDown onClick={showSideMenu} size={25} className='cursor-pointer font-bold text-orange-500 inline'/>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header
