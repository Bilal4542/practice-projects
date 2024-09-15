import React, { useEffect } from 'react'
import { client } from '../components/export'
import { useDarkMode } from '../components/DarkModeContext'
import { FaStamp, FaStar } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Client = () => {

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
    <div className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'}`}>
      <section id='client' className='w-full lg:w-[95%] h-fit m-auto bg-cover bg-center rounded-xl flex flex-col justify-center items-start px-6 lg:px-20 py-20 gap-20'>
        <div className="flex flex-col justify-center items-start gap-4">
          <h1 data-aos='zoom-in' className='text-red-500 dark:text-white'>OUR CLIENTS</h1>
          <h1 dara-aos='zoom-in' className='text-black dark:text-white text-[40px] font-semibold leading-10'>What Our Clients <br /> Says About Us</h1>
        </div>
        <div id="client-box" className='w-full grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-8'>
          {client.map((item,index)=>(
            <div key={index} data-aos='zoom-in' data-aos-delay='200' className='w-full flex flex-col justify-center items-center gap-6 rounded-xl p-12 bg-white dark:bg-gray-900 hover:bg-red-100 cursor-pointer'>
                <div className="flex justify-start items-start gap-4 w-full">
                  <img src={item.image} alt="" className='w-[70px] transform hover:scale-110 transition-transform duration-300' />
                  <div className="flex flex-col justify-center items-start gap-1">
                    <h1 className='text-black dark:text-white text-xl font-semibold'>{item.name}</h1>
                    <h1 className='text-slate-600 dark:text-white'>{item.text}</h1>
                  </div>
                </div>
                <p className='text-slate-600 text-justify dark:text-white'>{item.feedback}</p>
                <div className="flex justify-start items-start gap-1">
                  <FaStar className='text-yellow-400 size-4'/>
                  <FaStar className='text-yellow-400 size-4'/>
                  <FaStar className='text-yellow-400 size-4'/>
                  <FaStar className='text-yellow-400 size-4'/>
                </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Client
