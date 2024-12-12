import React from 'react'

const Description = () => {
  return (
    <div className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI Images</h1>
      <p className='text-gray-500 mb-8'>Turn Your Imagination into Visuals</p>

      <div className="flex flex-col md:flex-row gap-5 md:gap-14 items-center">
        <img className='w-80 xl:w-96 rounded-lg' src="https://cdn.pixabay.com/photo/2024/08/29/12/36/images-9006863_1280.jpg" alt="" />
        <div className="">
            <h2 className='text-3xl font-medium max-w-lg mb-4'>Introducing AI Powered Text to Image Generator</h2>
            <p className='text-gray-600 mb-4'>Easily bring your Ideas to life With our free AI image generator. Wether you nedd stunning visuals or unique imagery, our tool transform your text into eye catching images with just a few clicks. Imagine it, describe it, and watch it come to life instantly.</p>
            <p className='text-gray-600'>Easily bring your Ideas to life With our free AI image generator. Wether you nedd stunning visuals or unique imagery, our tool transform your text into eye catching images with just a few clicks. Imagine it, describe it, and watch it come to life instantly.</p>
        </div>
      </div>
    </div>
  )
}

export default Description
