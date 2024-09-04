import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(0)

    let plusData = () => {
        setCount(count+1)
    }

    let minusData = () => {
        if(count > 0){
            setCount(count-1)
        }else{
            setCount(0)
        }
    }
  return (
    <div className='flex items-center justify-center'>
      <button onClick={minusData} className='p-3 m-4 font-serif font-semibold text-xl bg-blue-800 text-white hover:bg-blue-600 rounded-lg transition-all duration-300'>Minus (-)</button>
      <p className='bg-blue-800 rounded-lg text-white p-3 m-4 font-serif font-semibold text-xl'>{count}</p>
      <button onClick={plusData} className='p-3 m-4 font-serif font-semibold text-xl bg-blue-800 text-white hover:bg-blue-600 rounded-lg transition-all duration-300'>Plus (+)</button>
    </div>
  )
}

export default Counter
