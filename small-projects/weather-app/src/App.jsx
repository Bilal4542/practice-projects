import React, { useState } from 'react'

const App = () => {
  const [city,setCity] = useState('')
  const [wdetails,setWdetails] = useState()
  const [isLoading,setIsLoading] = useState(false)
  const getData = (e) => {
    setIsLoading(true)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=751d66e130befad396405dc13796a57c&units=matric`)
    .then((response) => response.json())
    .then((finalResponse) => {
      if(finalResponse.cod=='404'){
        setWdetails(undefined)
      }else{
        setWdetails(finalResponse)
        console.log(finalResponse)
      }
      setIsLoading(false)
    })
    e.preventDefault();
    setCity('')
  }
  return (
    <div className='w-full h-screen bg-blue-400'>
      <div className="max-w-7xl mx-auto">
        <h1 className='text-3xl font-bold font-serif py-12 text-white'>Weather App</h1>
        <form className='flex items-center gap-5' onSubmit={getData}>
          <input type="text" value={city} onChange={(e)=>setCity(e.target.value)} className='w-80 h-10 pl-3 rounded-md' placeholder='Enter Your City Name...' />
          <button className=' bg-blue-600 font-semibold font-serif text-lg p-[6px] rounded-md text-white hover:bg-blue-500 hover:text-black duration-300'>Submit</button>
        </form>
        <div className="w-96 mx-auto bg-white shadow-lg mt-10 p-7 rounded-md relative">
          <img src="https://www.superiorlawncareusa.com/wp-content/uploads/2020/05/loading-gif-png-5.gif" width={100} className={`absolute left-[40%] ${isLoading ? '' : 'hidden'}`} alt="" />
          {wdetails!==undefined
          ?
          <>
          <h3 className='font-bold text-2xl font-serif'>{wdetails.name} <span className='bg-yellow-400 p-1 rounded-md'>{wdetails.sys.country}</span></h3>
          <h2 className='font-bold text-4xl font-serif'>{wdetails.main.temp}</h2>
          <img src={`http://openweathermap.org/img/w/${wdetails.weather[0].icon}.png`} alt="" />
          <p>
            {wdetails.weather[0].description}
          </p>
          </>
          :
          'No City Found'
        }
          
        </div>
      </div>
    </div>
  )
}

export default App
