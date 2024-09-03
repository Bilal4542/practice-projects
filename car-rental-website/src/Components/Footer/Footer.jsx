import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa'


const footerLinks = [
    {
        name: 'Home',
        link: '#'
    },
    {
        name: 'About',
        link: '/#about'
    },
    {
        name: 'Contact',
        link: '/#contact'
    },
    {
        name: 'Blog',
        link: '/#blog'
    },
]


const Footer = () => {
  return (
    <div className='bg-slate-100 dark:bg-gray-950 dark:text-white'>
      <div className='container'>
        <div className="grid md:grid-cols-3 py-5">
            {/* company Details  */}
            <div className='py-8 px-4'>
                <h1 className='text-xl sm:text-3xl font-bold font-serif sm:text-left text-justify mb-3 gap-3 flex items-center'>Car Rental</h1>
                <p className='font-serif'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt doloremque. In, vel reiciendis! Qui.</p>
                <br />
                <div className='flex items-center gap-3'>
                    <FaLocationArrow />
                    <p>Kohat Road Peshawar, Pakistan</p>
                </div>
                <div className='flex items-center gap-3'>
                    <FaMobileAlt />
                    <p>+92 3101096610</p>
                </div>
                {/* social handles */}
                <div className='flex items-center gap-3 mt6'>
                    <a href="#"> <FaInstagram className='text-3xl hover:text-primary duration-300' /> </a>
                    <a href="#"> <FaFacebook className='text-3xl hover:text-primary duration-300' /> </a>
                    <a href="#"> <FaLinkedin className='text-3xl hover:text-primary duration-300' /> </a>
                </div>
            </div>
            {/* end of company Details  */}
            {/* navlinks */}
            <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                {/* first col */}
                <div>
                    <div className='py-8 px-4'>
                        <h1 className='text-xl font-bold font-serif text-justify sm:text-left mb-3'>Important Links</h1>
                        <ul className='flex flex-col gap-3'>
                            {
                                footerLinks.map((data) => (
                                    <li className='cursor-pointer hover:text-primary duration-300' key={data.name}>
                                        <span className='mr-3'>&#11162;</span>
                                        <a href={data.link}>{data.name}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                {/* end of first col */}
                {/* second col */}
                <div>
                    <div className='py-8 px-4'>
                        <h1 className='text-xl font-bold font-serif text-justify sm:text-left mb-3'>Important Links</h1>
                        <ul className='flex flex-col gap-3'>
                            {
                                footerLinks.map((data) => (
                                    <li className='cursor-pointer hover:text-primary duration-300' key={data.name}>
                                        <span className='mr-3'>&#11162;</span>
                                        <a href={data.link}>{data.name}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                {/* end of second col */}
                {/* third col */}
                <div>
                    <div className='py-8 px-4'>
                        <h1 className='text-xl font-bold font-serif text-justify sm:text-left mb-3'>Important Links</h1>
                        <ul className='flex flex-col gap-3'>
                            {
                                footerLinks.map((data) => (
                                    <li className='cursor-pointer hover:text-primary duration-300' key={data.name}>
                                        <span className='mr-3'>&#11162;</span>
                                        <a href={data.link}>{data.name}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                {/* end of third col */}
            </div>
            {/* end of navlinks */}
        </div>
      </div>
    </div>
  )
}

export default Footer
