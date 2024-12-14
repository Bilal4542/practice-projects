import React from 'react'
import { FaStar } from "react-icons/fa"

const Testimonials = () => {

    const testimonialsData = [
        {
          image: 'https://cdn.pixabay.com/photo/2019/10/10/18/51/smartphone-4540273_1280.jpg',
          name: 'Donald Jackman',
          role: 'Graphic Designer',
          stars: [<FaStar />,<FaStar />, <FaStar />, <FaStar />, <FaStar />,],
          text: `I've been using bg.removal for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.`
        },
        {
          image: 'https://cdn.pixabay.com/photo/2019/10/10/18/51/smartphone-4540273_1280.jpg',
          name: 'Samantha Reed',
          role: 'Content Creator',
          stars: [<FaStar />,<FaStar />, <FaStar />, <FaStar />, <FaStar />,],
          text: `I've been using bg.removal for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.`
        },
        {
          image: 'https://cdn.pixabay.com/photo/2019/10/10/18/51/smartphone-4540273_1280.jpg',
          name: 'Alex Turner',
          role: 'Photographer',
          stars: [<FaStar />,<FaStar />, <FaStar />, <FaStar />, <FaStar />,],
          text: `I've been using bg.removal for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.`
        }
      ];
      
  return (
    <div className='flex flex-col items-center justify-center my-20 py-12'>
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Customer Testimonials</h1>
      <p className='text-gray-500 mb-12'>What our users are saying</p>
      <div className="flex flex-wrap gap-6">
        {testimonialsData.map((testimonial, index)=>(
            <div className='bg-white/20 p-12 rounded-lg shadow-md border w-80 m-auto cursor-pointer hover:scale-[1.02] transition-all duration-300' key={index}>
                <div className=" flex flex-col items-center">
                    <img className='rounded-full w-14' src={testimonial.image} alt="" />
                    <h2 className='text-xl font-semibold mt-3'>{testimonial.name}</h2>
                    <p className='text-gray-500 mb-4'>{testimonial.role}</p>
                    <p className='flex mb-4 gap-1 text-yellow-500'>{testimonial.stars}</p>
                    <p className='text-gray-600 text-sm text-center'>{testimonial.text}</p>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
