import React, { useEffect } from 'react'
import { useDarkMode } from '../components/DarkModeContext'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Contact = () => {
    useEffect(()=>{
        AOS.init({
          offset: 200,
          duration: 800,
          easing: 'ease-in-sine',
          delay: 100
        })
      }, [])
    
      const {darkMode,toggleDarkMode} = useDarkMode()
  return (
    <div className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'} pb-20`}>
        <section className={`${darkMode ? 'dark bg-gray-800' : 'light bg-red-100'} w-full lg:w-[95%] m-auto grid grid-cols-1 lg:grid-cols-2 justify-center items-center px-6 lg:px-36 py-20 gap-10`}>
            <div data-aos='zoom-in' className="bg-white dark:bg-black p-10 flex flex-col justify-center items-start gap-4 rounded-xl">
                <h1 className='text-2xl text-black dark:text-white font-semibold'>Send a Message Today</h1>
                <input type="text" placeholder='Enter Your Full Name' className='w-full px-6 py-3 border-2 border-gray-200 rounded-xl'/>
                <input type="email" placeholder='Enter Your Valid Email' className='w-full px-6 py-3 border-2 border-gray-200 rounded-xl'/>
                <input type="tel" placeholder='Enter Your Valid Phone Number' className='w-full px-6 py-3 border-2 border-gray-200 rounded-xl'/>
                <textarea cols={30} rows={5} className='w-full px-6 py-3 border-2 border-gray-200 rounded-xl' placeholder='Write Your Message Here...'></textarea>
                <button className='w-full bg-red-600 text-md px-8 py-3 text-white font-semibold rounded-xl hover:bg-black dark:hover:bg-red-700 cursor-pointer'>SEND EMAIL</button>
            </div>
            <div className="flex flex-col justify-center items-start gap-8 p-6 lg:p-20">
                <h1 data-aos='zoom-in' data-aos-delat='200' className='text-red-500 dark:text-white'>REACH US</h1>
                <h1 data-aos='zoom-in' data-aos-delay='400' className='text-black dark:text-white text-[40px] font-semibold leading-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
                <p className='text-gray-600 dark:text-white text-xl text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit Sunt vitae praesentium. Ipsa sit veritatis aspernatur Quia officia dolor sit amet consectetur adipisicing elit Sunt vitae praesen</p>
                <button className='bg-red-600 text-md px-8 py-3 text-white font-semibold rounded-xl hover:bg-black dark:hover:bg-red-700 cursor-pointer'>SEND EMAIL</button>
            </div>
        </section>
      
    </div>
  )
}

export default Contact
