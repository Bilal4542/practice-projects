import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [count,setCount] = useState(0)

    useEffect(()=>{
        const timer = setInterval(() => {
            setCount((preCount)=> preCount + 1)
        }, 1000);
        return ()=> clearInterval(timer)
    },[])
  return (
    <div>
      <h1>Timer {count}</h1>
    </div>
  )
}

export default Timer
