import React, { useContext } from 'react'
import { BsStars } from "react-icons/bs";
import { AppContext } from '../context/AppContext';
import {useNavigate} from 'react-router-dom'
const Header = () => {

  const {user, setShowLogin} = useContext(AppContext)

  const navigate = useNavigate()

  const onClickHandler = () => {
      if(user){
        navigate('/result')
      }else{
        setShowLogin(true)
      }
  }

    const images = [
        "https://cdn.pixabay.com/photo/2024/03/04/14/17/ai-generated-8612487_1280.jpg",
        "https://cdn.pixabay.com/photo/2024/01/10/03/29/ai-generated-8498790_1280.jpg",
        "https://cdn.pixabay.com/photo/2023/12/22/20/57/ai-generated-8464364_1280.jpg",
        "https://cdn.pixabay.com/photo/2024/03/16/20/35/ai-generated-8637800_1280.jpg",
        "https://cdn.pixabay.com/photo/2024/04/26/19/16/bohemian-8722478_1280.png",
        "https://cdn.pixabay.com/photo/2024/04/25/17/19/ai-generated-8720322_1280.jpg"
    ]

  return (
    <div className='flex flex-col justify-center items-center text-center my-20'>
      <div className="inline-flex text-stone-500 text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500">
        <p>Best Text to Image Generator</p>
        <BsStars />
      </div>
      <h1 className='text-4xl sm:text-7xl max-w-[300px] sm:max-w-[590px] mx-auto mt-10 text-center'>Turn text to <span className='text-blue-600'>image,</span> in Seconds</h1>
      <p className='mx-auto text-center max-w-xl mt-5'>Unleash your creativity with AI. Turn your imagination into visual arts in seconds - just type and watch the magic happen.</p>
      <button onClick={onClickHandler} className='sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full hover:scale-105 transition-all duration-300'>
        Generate Image
        <BsStars />
      </button>

      <div className="flex flex-wrap justify-center mt-16 gap-3">
        {images.map((images,index)=>(
            <img className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10' src={images} alt='' key={index} width={70}/>
        ))}
      </div>

      <p className='text-stone-600 mt-2'>Generated Images from PixelWords</p>
    </div>
  )
}

export default Header
