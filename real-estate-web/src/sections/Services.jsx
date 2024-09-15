import React, { useEffect } from 'react'
import { service } from '../components/export'
import { useDarkMode } from '../components/DarkModeContext'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Services = () => {

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
      <section id='services' className={`${darkMode ? 'dark bg-gray-800' : 'light bg-red-100'} w-full h-fit lg:w-[95%] m-auto rounded-xl flex flex-col justify-center items-start px-6 lg:px-20 py-20 gap-10`}>
        <div className="flex flex-col justify-center items-start gap-4">
          <h1 data-aos='zoom-in' className='text-red-500 dark:text-white'>Our Services</h1>
          <h1 data-aos='zoom-in' className='text-black text-[40px] font-semibold leading-10 dark:text-white'>Top Real Estate <br /> Services Available</h1>
        </div>
        <div id="service-box" className='grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-8'>
          {service.map((item,index)=>(
            <div key={index} data-aos='zoom-in' data-aos-delay='200' className='flex flex-col justify-center items-start gap-4 bg-white dark:bg-black h-[350px] px-8 py-16 rounded-xl border-b-[5px] border-red-600 hover:bg-red-300 cursor-pointer'>
              <div className="p-6 rounded-full bg-red-200">
                <item.icon className='text-red-600 size-10 transform hover:scale-110 transition-transform duration-300 cursor-pointer'/>
              </div>
              <h1 className='text-black dark:text-white font-semibold text-[22px]'>{item.title}</h1>
              <p className='text-lg text-slate-700 dark:text-white'>{item.desc}</p>
              <button className='border-b-2 border-red-600 text-red-600 font-semibold pb-0 dark:text-white'>Read More</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Services
