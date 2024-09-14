import React, { useEffect } from 'react'
import { useDarkMode } from '../components/DarkModeContext'
import AOS from 'aos'
import 'aos/dist/aos.css'
import area1 from '../assets/area1.jpg'
import area2 from '../assets/area3.jpg'
import area3 from '../assets/area2.jpg'


const PopularAreas = () => {


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
      <section className={`${darkMode ? 'dark bg-gray-800' : 'light bg-red-100'} w-full lg:w-[90%] h-fit m-auto bg-cover bg-center rounded-xl flex flex-col justify-center items-center px-6 lg:px-20 py-20 gap-20`}>
        <div id='top' className='w-full grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-8'>
          <div>
            <h1 data-aos='zoom-in' className='text-red-500 dark:text-white'>Popular areas</h1>
            <h1 data-aos='zoom-in' className='text-black text-[40px] font-semibold leading-10 mt-4 dark:text-white'>Explore Most <br /> Popular Areas</h1>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-3 col-span-2 justify-center items-center gap-6'>
            <div data-aos='zoom-in' data-aos-delay='400' className='h-[400px] bg-cover bg-center rounded-xl' style={{backgroundImage: `url(${area1})`}}>
            </div>
            <div data-aos='zoom-in' data-aos-delay='400' className='h-[400px] bg-cover bg-center rounded-xl' style={{backgroundImage: `url(${area2})`}}>
            </div>
            <div data-aos='zoom-in' data-aos-delay='400' className='h-[400px] bg-cover bg-center rounded-xl' style={{backgroundImage: `url(${area3})`}}>
            </div>
          </div>
        </div>
        <div id='bottom' className='w-full grid grid-cols-1 lg:grid-cols-3 justify-start lg:justify-center items-start gap-6'>
          <div data-aos='slide-up' data-aos-delay='200' className='flex justify-center lg:items-center gap-8 w-full'>
            <h1 className='text-black text-7xl font-semibold dark:text-white'>5K</h1>
            <h1>Active <br /> Listings</h1>
          </div>
          <div data-aos='slide-up' data-aos-delay='200' className='flex justify-center lg:items-center gap-8 w-full'>
            <h1 className='text-black text-7xl font-semibold dark:text-white'>5K</h1>
            <h1>Active <br /> Listings</h1>
          </div>
          <div data-aos='slide-up' data-aos-delay='200' className='flex justify-center lg:items-center gap-8 w-full'>
            <h1 className='text-black text-7xl font-semibold dark:text-white'>5K</h1>
            <h1>Active <br /> Listings</h1>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PopularAreas
