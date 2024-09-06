import React, { useState } from 'react'
import { tabs } from '../data/Tabs'

const TabbingSystem = () => {
    const [activeTab,setActiveTab] = useState(0)
    const [activeContent,setActiveContent] = useState(tabs[0])
    const changeData = (index) => {
        setActiveTab(index)
        setActiveContent(tabs[index])
    }
  return (
    <>
     <div className='w-[1100px] m-auto'>
        <h1 className='text-2xl font-bold font-serif my-2'>Tabbing System</h1>
        <ul className='flex gap-5'>
            {tabs.map((tabItem,index)=>(
                <li key={index}><button onClick={()=>changeData(index)} className={`bg-gray-300 p-2 rounded-lg font-serif text-lg ${activeTab==index?'bg-[blue] text-white': ''}`}>{tabItem.title}</button></li>
            ))}
        </ul>
           {activeContent!==undefined?<p>{activeContent.description}</p>:''} 
     </div> 
    </>
  )
}

export default TabbingSystem
