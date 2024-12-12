import React from 'react'
import { FaEye, FaDownload, FaWandMagicSparkles } from "react-icons/fa6";


const Steps = () => {
    const stepsData = [
        {
            title:"Describe Your Vision",
            description:"Type a Phrase, Sentence or Paragraph that describe the you want to create",
            icon:<FaEye size={20}/>,
        },
        {
            title:"Watch the Magic",
            description:"Our AI Powered Engine will transfrom your text into a high-quality, unique image in seconds",
            icon:<FaWandMagicSparkles size={20}/>
        },
        {
            title:"Download & Share",
            description:"Instantly download your creation or share it with the world directly from our platform",
            icon:<FaDownload size={20}/>
        },
    ]
  return (
    <div className='flex flex-col items-center justify-center my-32'>
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>How it Works</h1>
      <p className='text-lg text-gray-600 mb-10'>Transform Words into Stunning Images</p>
      <div className="space-y-4 w-full max-w-3xl text-sm">
        {stepsData.map((data,index)=>(
            <div className="flex items-center gap-4 p-5 px-8 bg-white/20 shadow-md border cursor-pointer hover:scale-[1.02] transition-all duration-300 rounded-lg" key={index}>
                <span className='bg-gray-200 p-2 rounded-lg'>{data.icon}</span> 
                <div className="">
                    <h2 className='text-xl font-medium'>{data.title}</h2>
                    <p className='text-gray-500'>{data.description}</p>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Steps
