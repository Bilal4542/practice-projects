import React from 'react'
import pattern from '../../assets/pattern.jpeg'
import playStoreImg from '../../assets/playStoreImg.png'
import appStoreImg from '../../assets/appStoreImg.png'


const bannerImg = {
    backgroundImage: `url(${pattern})`,
    backgroundRepet: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%',
    width: '100%'
}

const AppStoreBanner = () => {
  return (
    <div className='container pb-14'>
      <div className='text-black py-10 sm:min-h-[400px] sm:grid sm:place-items-center rounded-xl' style={bannerImg}>
        <div>
            <div className='max-w-xl mx-auto space-y-6'>
                <h1 data-aos='fade-up' className='text-2xl sm:text-4xl font-serif font-bold text-center'>Get Started with Our App</h1>
                <p data-aos='fade-up' className='text-center sm:px-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ea illo sit laborum.</p>
                <div data-aos='fade-up' className='flex flex-wrap justify-center items-center gap-5'>
                    <a href='#'>
                        <img className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]' src={playStoreImg} alt="" />
                    </a>
                    <a href='#'>
                        <img className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]' src={appStoreImg} alt="" />
                    </a>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AppStoreBanner
