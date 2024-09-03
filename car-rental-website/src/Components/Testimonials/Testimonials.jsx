import React from 'react'


const testimonialData = [
    {
        name: 'Waqas',
        image: '',
        description: 'lorem ipsum what ipsum lorem so ismet know ipsum.',
        aosDelay: '0'
    },
    {
        name: 'Saad',
        image: '',
        description: 'lorem ipsum what ipsum lorem so ismet know ipsum.',
        aosDelay: '300'
    },
    {
        name: 'Usman',
        image: '',
        description: 'lorem ipsum what ipsum lorem so ismet know ipsum.',
        aosDelay: '1000'
    },
]

const Testimonials = () => {
  return (
    <div className='dark:bg-black dark:text-white py-14 sm:pb-24'>
      <div className='container'>
        {/* header */}
        <div className='space-y-4 pb-12'>
            <p data-aos='fade-up' className='text-3xl sm:text-4xl font-bold font-serif text-center'>What Our Clients Say About Us</p>
            <p data-aos='fade-up' className='text-center sm:px-44'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam asperiores amet nemo magni id!</p>
        </div>
        {/* card section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-black dark:text-white'>
            {
                testimonialData.map((data) => (
                    <div key={data.name} data-aos='fade-up' data-aos-delay={data.aosDelay} className='card text-center group space-y-3 sm:space-y-6 p-4 bg-gray-100 dark:bg-white/20 sm:py-12 duration-300 rounded-lg'>
                        <div className='grid place-items-center'>
                            <img className='w-20 h-20 rounded-full' src="https://picsum.photos/200" alt="" />
                        </div>
                        <div className='text-2xl'>⭐⭐⭐⭐⭐</div>
                        <p>{data.description}</p>
                        <p className='font-semibold text-center'>{data.name}</p>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default Testimonials