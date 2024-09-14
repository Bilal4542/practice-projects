import React, { useEffect } from 'react'
import { useDarkMode } from '../components/DarkModeContext'
import heroimg from '../assets/hero1.webp'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Hero = () => {
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
    <>
     <div className={`${darkMode ? 'dark bg-black' : 'light bg-white'}`}>
      <section id='hero' className='w-[95%] h-[600px] m-auto bg-cover bg-center rounded-xl flex flex-col justify-center items-start px-10 lg:px-28 gap-7 z-20' style={{backgroundImage: `url(${heroimg})`}}>
        <h1 data-aos='zoom-in' className='text-6xl text-white font-semibold pr-0 lg:pr-[500px] leading-[60px] lg:leading-[70px] '>Find Your Next Home in RMT</h1>
        <p data-aos='zoom-in' className='text-xl text-white pr-0 lg:pr-[500px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat officia ea similique officiis.</p>
      </section>
      {/* form starts from here */}
      <div  className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'} z-10`}>
          <div  data-aos='zoom-in' id='form' className={`${darkMode ? 'dark bg-gray-800' : 'light bg-white'} w-full lg:w-[70%] m-auto grid grid-cols-1 lg:grid-cols-4 justify-center items-center gap-6 p-8 -mt-14 rounded-xl`}>
              <div className='w-full'>
                <h1 className='text-black font-semibold dark:text-white'>Location</h1>
                <input type="text" placeholder='Enter an Address, State, City or Pincode' className='bg-white p-2 w-full mt-2 border-b-[1px] border-[#c9c7c1] text-gray-500 text-md' />
              </div>
              <div className="w-full">
              <h1 className='text-black font-semibold dark:text-white'>TYPE</h1>
              <select name="selectOption" id="selectOption" className='bg-white p-2 w-full mt-2 border-b-[1px] border-[#c9c7c1] text-gray-500 text-md'>
                <option value="" disabled selected>Select Property</option>
                <option value="option1">Rentals</option>
                <option value="option2">Sales</option>
                <option value="option3">Commercials</option>
              </select>
              </div>
              <div className="w-full">
              <h1 className='text-black font-semibold dark:text-white'>Category</h1>
              <select name="selectOption" id="selectOption" className='bg-white p-2 w-full mt-2 border-b-[1px] border-[#c9c7c1] text-gray-500 text-md'>
                <option value="" disabled selected>Property Category</option>
                <option value="option1">Appartments</option>
                <option value="option2">Bungalow</option>
                <option value="option3">Villas</option>
                <option value="option3">Small Houses</option>
              </select>
              </div>
              <div className="w-full">
                <button className='bg-red-600 w-full dark:bg-red-700 hover:bg-black dark:hover:bg-white dark:hover:text-black text-lg p-4 text-white font-semibold rounded-xl cursor-pointer transform hover:scale-110 transition-transform duration-300'>SUBMIT</button>
              </div>
          </div>
      </div>
      {/* form ends here */}
    </div> 
    </>
  )
}

export default Hero
