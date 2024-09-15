import React from 'react'
import { useDarkMode } from './DarkModeContext'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaBuilding, FaMobile, FaFax, FaArrowUp, FaMoon, FaSun } from 'react-icons/fa'
import {Link} from 'react-scroll'
import {IoMdMail} from 'react-icons/io'
import prop7 from '../assets/prop7.jpg'
import prop8 from '../assets/prop8.jpg'

const Footer = () => {

  const {darkMode,toggleDarkMode} = useDarkMode()

  return (
    <>
    <footer className={`${darkMode ? 'dark bg-black' : 'light bg-gray-800'} w-full m-auto px-10 lg:px-20 py-10 grid grid-cols-1 lg:grid-cols-3 justify-center items-start gap-10 lg:gap-20`}>
      <div className="flex flex-col justify-center items-start gap-5">
        <h1 className='text-white text-2xl font-semibold'>About Us</h1>
        <p className='text-slate-200 text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores earum asperiores dolore vero libero nam rem! Accusantium numquam illum voluptas!</p>
        <div id="social-icons" className='flex justify-start items-center gap-4 mt-4'>
          <div className="p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer hover:scale-110 transition-transform duration-300">
            <FaFacebookF className='size-4'/>
          </div>
          <div className="p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer hover:scale-110 transition-transform duration-300">
            <FaInstagram className='size-4'/>
          </div>
          <div className="p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer hover:scale-110 transition-transform duration-300">
            <FaTwitter className='size-4'/>
          </div>
          <div className="p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer hover:scale-110 transition-transform duration-300">
            <FaYoutube className='size-4'/>
          </div>
        </div>
        <h1 className='mt-8 text-white'>Copyright Real Estate, All Rights Reserved.</h1>
      </div>
      <div className="flex flex-col justify-center items-start gap-5">
        <h1 className='text-white text-2xl font-semibold'>Contact Us</h1>
        <div className="flex justify-center items-center gap-5">
          <FaBuilding className='text-white size-5'/>
          <p className='text-slate-200'>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="flex justify-center items-center gap-5">
          <FaMobile className='text-white size-5'/>
          <p className='text-slate-200'>+92 123456789</p>
        </div>
        <div className="flex justify-center items-center gap-5">
          <FaFax className='text-white size-5'/>
          <p className='text-slate-200'>000-888-666</p>
        </div>
        <div className="flex justify-center items-center gap-5">
          <IoMdMail className='text-white size-5'/>
          <p className='text-slate-200'>test123@gmail.com</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-start gap-5">
        <h1 className='text-2xl font-semibold text-white'>Latest Properties</h1>
        <div className="flex justify-center items-center gap-4">
          <img src={prop7} alt="" className='w-[120px] rounded-lg transform hover:scale-110 transition-transform duration-300 cursor-pointer'/>
        <div>
          <h1 className='text-white text-lg'>Villa with Amazing View</h1>
          <p className='text-slate-400'>$ 288.65</p>
        </div>
        </div>
        <div className="flex justify-center items-center gap-4">
          <img src={prop8} alt="" className='w-[120px] rounded-lg transform hover:scale-110 transition-transform duration-300 cursor-pointer'/>
        <div>
          <h1 className='text-white text-lg'>Smart View from Beach</h1>
          <p className='text-slate-400'>$ 478.45</p>
        </div>
        </div>
      </div>
    </footer>
    {/* slide-to-top button */}
    <div className="bg-red-600 p-4 rounded-full hover:bg-black cursor-pointer fixed right-6 bottom-6 lg:bottom-12">
      <Link to='hero' spy={true} smooth={true} offset={-100}><FaArrowUp className='size-6 text-white'/></Link>
    </div>
    {/* slide-to-top button ends here */}


    {/* dark mood toggle button */}
    <button onClick={toggleDarkMode} className='flex items-center p-4 rounded-full bg-orange-500 fixed lg:top-52 right-6 top-6'>{darkMode ? <FaSun size={25} className='text-black'/> : <FaMoon size={25} className='text-black'/>}</button>
    {/* dark mood toggle button  ends here*/}
    </>
    
  )
}

export default Footer
