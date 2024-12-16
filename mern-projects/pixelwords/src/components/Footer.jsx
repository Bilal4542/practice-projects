import React from 'react'
import logo from '../assets/logo.png'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20'>
      <img src={logo} width={50} alt="" />
      <p className='flex-1 border-l border-gray-400 text-gray-500 pl-4 text-sm max-sm:hidden'>Copyright @PixelWords.com | All rights reserved.</p>

      <div className="flex gap-2.5">
      <FaFacebookSquare size={20}/>
      <FaTwitterSquare size={20}/>
      <FaSquareInstagram size={20}/>
      </div>
    </div>
  )
}

export default Footer
