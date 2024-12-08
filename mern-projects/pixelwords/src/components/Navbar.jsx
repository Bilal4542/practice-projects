import React, { useContext } from 'react'
import logo from '../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { MdStars } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { AppContext } from '../context/AppContext';

const Navbar = () => {
  
  const {user} = useContext(AppContext)

  const navigate = useNavigate()
  return (
    <div className='flex items-center justify-between py-4'>
      <Link to={'/'}>
        <img className='w-16' src={logo} alt="" />
      </Link>
      <div className="">
        {
          user ?
          <div className=" flex items-center gap-2 sm:gap-3">
            <button onClick={()=>navigate('/buycredit')} className='flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700'>
            <MdStars className=''/>
            <p className='text-xs sm:text-sm font-medium text-gray-600'>Credit Left : 50</p>
            </button>
            <p className='text-gray-600 max-sm:hidden pl-4 '>Hi, Bilal</p>
            <div className="relative group">
            <FaUserCircle className='drop-shadow'/>
            <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12">
              <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
                <li className='py-1 px-2 cursor-pointer pr-10'>Logout</li>
              </ul>
            </div>
            </div>
          </div>
          :
          <div className="flex items-center gap-2 sm:gap-5">
            <p onClick={()=>navigate('/buycredit')} className='cursor-pointer border-zinc-800 border rounded-full px-7 py-1 sm:px-10'>Pricing</p>
            <button className='bg-zinc-800 text-white text-sm px-7 py-2 sm:px-10 rounded-full'>Login</button>
          </div>
        }
      </div>
    </div>
  )
}

export default Navbar
