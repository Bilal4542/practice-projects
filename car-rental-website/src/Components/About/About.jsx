import React from 'react'
import aboutcar from '../../assets/aboutcar.png'

const About = () => {
  return (
    <div className='dark:bg-gray-950 dark:text-white duration-300 sm:min-h-[600px] sm:grid sm:place-items-center bg-slate-100'>
    <div className='container'>
      <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
        <div data-aos='slide-right' data-aos-duration='1500'>
            <img src={aboutcar} className='sm:scale-105 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]' alt="" />
        </div>
        <div className='space-y-6 sm:p-16 pb-6'>
            <h1 data-aos='fade-up' className='text-3xl sm:text-4xl font-bold font-serif'>About Us</h1>
            <p data-aos='fade-up'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ullam perspiciatis veritatis! Quae, maxime.</p>
            <p data-aos='fade-up'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, ea?
            </p>
            <button data-aos='fade-up' className='button-outline'>Get Started</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About
