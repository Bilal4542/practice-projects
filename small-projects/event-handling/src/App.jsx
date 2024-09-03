import React from 'react'

const App = () => {
  const displayData = () => {
    alert('Welcome Back to Programing')
  }
  const addData = (a,b) => {
    alert(`The Result is ${a + b}`)
  }
  return (
    <div>
      <div>
        <button onClick={()=>addData(40,60)} className='p-3 bg-slate-700 text-white font-serif font-semibold rounded-lg m-4 hover:bg-slate-800 duration-300'>Add Data</button>
        <button onClick={displayData} className='p-3 bg-slate-700 text-white font-serif font-semibold rounded-lg m-4 hover:bg-slate-800 duration-300'>Show Data</button>
      </div>
    </div>
  )
}

export default App
