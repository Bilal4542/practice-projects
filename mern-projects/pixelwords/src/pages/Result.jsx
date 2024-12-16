import React, { useState } from 'react'

const Result = () => {

  const [image, setImage] = useState('https://cdn.pixabay.com/photo/2024/08/29/12/36/images-9006863_1280.jpg')

  const [isImageLoaded, setIsImageLoaded] = useState(false)

  const [loading, setLoading] = useState(false)

  const [input, setInput] = useState('')

  const onSubmitHandler =  async (e) => {

  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center justify-center min-h-[90vh]'>
    <div className=''>
      <div className="relative">
        <img src={image} className='max-w-sm rounded' alt="" />
        <span className={`absolute h-1 bg-blue-500 bottom-0 left-0 ${loading ? 'w-full transition-all duration-[10s]' : 'w-0'} `}/>
      </div>
      <p className={!loading ? 'hidden' : ''}>Loading....</p>
    </div>
    {!isImageLoaded &&
    <div className="flex max-w-xl w-full bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full">
      <input onChange={e => setInput(e.target.value)} value={input} type="text" placeholder='Describe What you want to Generate' className='flex-1 bg-transparent outline-none ml-8 max-sm:w-20' />
      <button type='submit' className='bg-zinc-900 px-10 sm:px-16 py-3 rounded-full'>Generate</button>
    </div>
    }

    {isImageLoaded &&
    <div className="flex flex-wrap gap-2 justify-center text-white text-sm p-0.5 mt-10 rounded-full">
      <p onClick={()=>{setIsImageLoaded(false)}} className='bg-transparent border border-zinc-900 text-black py-3 px-8 rounded-full cursor-pointer'>Generate Another</p>
      <a href={image} className='bg-zinc-900 py-3 px-8 rounded-full cursor-pointer'>Download</a>
    </div>
    }
    </form>
  )
}

export default Result
