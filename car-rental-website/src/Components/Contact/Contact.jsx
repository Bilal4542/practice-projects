import React from 'react'

const Contact = () => {
  return (
    <div className='bg-white dark:bg-black dark:text-white'>
    <div data-aos='zoom-in' data-aos-duration='1000' className='py-16 '>
      <div className='container'>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-gray-800 py-8 px-6">
            <div className='col-span-2 space-y-3 font-serif'>
                <h1 className='text-4xl sm:text-5xl font-bold text-white'>Let's Collaborate on your Upcoming Car Rental Venture</h1>
                <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio porro mollitia quasi ut.</p>
            </div>
            <div className='grid place-items-center'>
                <a href="#" className='inline-block font-semibold py-2 px-6 bg-primary text-white rounded-lg tracking-wider uppercase hover:bg-primary/80 duration-300'>Contact</a>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact
