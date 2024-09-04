import React from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Categories = () => {
  return (
    <div className='max-w-[1200px] mx-auto'>
     <div className='flex items-center justify-between my-5'>
        <div className='text-[25px] font-bold'>What's on Your Mind?</div>
        <div className='flex items-center justify-center'>
            <div className='cursor-pointer hover:bg-gray-200 duration-300 flex items-center justify-center w-[30px] h-[30px] bg-gray-300 rounded-full mx-2'><FaArrowLeft/></div>
            <div className='cursor-pointer hover:bg-gray-200 duration-300 flex items-center justify-center w-[30px] h-[30px] bg-gray-300 rounded-full mx-2'><FaArrowRight/></div>
        </div>
    </div> 
    </div>
  )
}

export default Categories
