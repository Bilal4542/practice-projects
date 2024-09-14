import React, { useEffect } from 'react'
import { useDarkMode } from '../components/DarkModeContext'
import aboutImg from '../assets/about.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'


const About = () => {
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
    <section id='about' className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'} w-full m-auto px-10 py-20 lg:px-40 grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-10`}>
     <div className=''>
        <img data-aos='zoom-in' src={aboutImg} alt="About Image" className='rounded-2xl lg:w-[500px] lg:h-[600px]' />
     </div>
     <div className="flex flex-col justify-center items-start gap-8">
      <h1 data-aos='zoom-in' className='text-red-500 dark:text-white'>Who We Are...</h1>
      <h1 data-aos='zoom-in' data-aos-delay='200' className='text-black text-[40px] font-semibold leading-10 dark:text-white'>Lorem ipsum dolor sit amet consectetur dolor</h1>
      <p data-aos='zoom-in' data-aos-delay='400' className='text-xl text-gray-600 dark:text-white text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus odit harum amet aliquid dolor amet consectetur adipisicing elit</p>
      <button data-aos='zoom-in' data-aos-delay='500' className='bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white dark:hover:text-black text-lg p-4 text-white font-semibold rounded-xl cursor-pointer transform hover:scale-110 transition-transform duration-300'>Read More</button>
     </div>
    </section>
  )
}

export default About
