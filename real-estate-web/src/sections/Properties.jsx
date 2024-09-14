import React, { useEffect } from 'react'
import { useDarkMode } from '../components/DarkModeContext'
import { property } from '../components/export'
import { FaBath, FaShareAlt, FaBed, FaUserCircle, FaPlus, FaMapMarkerAlt, FaVideo, FaCamera } from 'react-icons/fa'
import { MdSpaceDashboard } from 'react-icons/md'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Properties = () => {

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
    <div className={`${darkMode ? 'dark: bg-black' : 'light bg-transparent'}`}>
      <section id='properties' className='w-full lg:w-[90%] m-auto px-6 lg:px-20 py-20 flex flex-col justify-center items-start gap-10'>
        <div className="flex flex-col justify-center items-start gap-4">
          <h1 data-aos='zoom-in' className='text-red-500 dark:text-white'>Properties</h1>
          <h1 data-aos='zoom-in' className='text-black text-4xl font-semibold dark:text-white'>Explore the latest</h1>
        </div>
        {/* grid properties starts from here */}
        <div id='grid-box' className='w-full grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-8'>
          {property.map((item,index) => (
            <div data-aos='zoom-in' data-aos-delay='200' className='bg-white dark:bg-gray-800 rounded-xl w-full'>
              <div id='image-box' className='bg-cover bg-center h-[250px] rounded-xl p-4 flex flex-col justify-between items-end' style={{backgroundImage:`url(${item.images})`}}>
                <div id='top' className='w-full flex justify-between items-end'>
                  <div><button className='px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-full text-[13px] duration-300'>Featured</button></div>
                  <div></div>
                </div>
                <div></div>
              </div>
            </div>
          ))}
        </div>
        {/* grid properties end  here */}
      </section>
    </div>
  )
}

export default Properties
