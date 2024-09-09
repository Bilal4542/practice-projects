import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { lowerCase, Numbers, SpecialChar, upperCase } from './PassChar';


const App = () => {
  const [uppercase,setUppercase] = useState(false)
  const [lowercase,setLowercase] = useState(false)
  const [numbers,setNumbers] = useState(false)
  const [specialChar,setSpecialChar] = useState(false)
  const [passLength,setPassLength] = useState(10)
  const [password,setPassword] = useState()

  const createPassword = () => {
    let charSet = ''
    let finalPass = ''
    if(uppercase || lowercase || numbers || specialChar){
        if(uppercase) charSet+=upperCase
        if(lowercase) charSet+=lowerCase
        if(numbers) charSet+=Numbers
        if(specialChar) charSet+=SpecialChar
        for(let i = 0; i < passLength; i++){
            finalPass+=charSet.charAt(Math.floor(Math.random()*charSet.length))
        }
        setPassword(finalPass)
    }else{
      toast.error('Please select atleast one Check box...')
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(password)
    toast.success('Password Copied Successfully')
  }

  return (
    <div className='bg-blue-500 w-80 rounded-lg p-5'>
      <h1 className='text-2xl text-center font-bold font-serif'>Password Generator</h1>
      <div className="flex gap-2 my-2">
        <input type="text" className='basis-4/5 rounded-md p-1' value={password} readOnly />
        <button className='basis-1/5 p-2 bg-blue-600 font-semibold rounded-md' onClick={handleCopy}>Copy</button>
      </div>
      <div className="flex justify-between items-center my-3">
        <label className='font-semibold font-serif'>Password Lenght</label>
        <input type="number" min={10} max={20} className='w-[55px] p-2 rounded-md' value={passLength} onChange={(event)=>setPassLength(event.target.value)}/>
      </div>
      <div className="flex justify-between items-center my-3">
        <label className='font-semibold font-serif'>Include Upper Case</label>
        <input type="checkbox" max={20} className='w-[55px] p-2 rounded-md' checked={uppercase} onChange={()=>setUppercase(!uppercase)} />
      </div>
      <div className="flex justify-between items-center my-3">
        <label className='font-semibold font-serif'>Include Lower Case</label>
        <input type="checkbox" max={20} className='w-[55px] p-2 rounded-md' checked={lowercase} onChange={()=>setLowercase(!lowercase)} />
      </div>
      <div className="flex justify-between items-center my-3">
        <label className='font-semibold font-serif'>Include Numbers</label>
        <input type="checkbox" max={20} className='w-[55px] p-2 rounded-md' checked={numbers} onChange={()=>setNumbers(!numbers)} />
      </div>
      <div className="flex justify-between items-center my-3">
        <label className='font-semibold font-serif'>Include Special Character</label>
        <input type="checkbox" max={20} className='w-[55px] p-2 rounded-md' checked={specialChar} onChange={()=>setSpecialChar(!specialChar)} />
      </div>
      <button onClick={createPassword} className='bg-blue-600 p-3 rounded-md font-serif font-semibold my-2 w-full'>Generate Password</button>
      <ToastContainer />
    </div>
  )
}

export default App
