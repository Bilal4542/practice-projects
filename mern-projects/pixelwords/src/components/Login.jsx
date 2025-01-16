import React, { useContext, useEffect, useState } from 'react'
import { FaPassport, FaUser,FaXmark  } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { AppContext } from '../context/AppContext';
import backendUrl from '../context/AppContext'
import setToken from '../context/AppContext'
import setUser from '../context/AppContext'
import axios from 'axios'

import { toast } from 'react-toastify';

const Login = () => {
    const {setShowLogin} = useContext(AppContext)
    const [state, setState] = useState('Login')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmitHandler = async (e) => {
      e.preventDefault();
      try {
        if(state === 'Login'){
          const {data} = await axios.post(backendUrl + '/api/user/login', {email, password})

          if(data.success){
            setToken(data.token)
            setUser(data.user)
            localStorage.setItem('token', data.token)
            setShowLogin(false)
          }else{
            toast.error(data.message)
          }
        }else{
          const {data} = await axios.post(backendUrl + '/api/user/register', {name, email, password})

          if(data.success){
            setToken(data.token)
            setUser(data.user)
            localStorage.setItem('token', data.token)
            setShowLogin(false)
          }else{
            toast.error(data.message)
          }
        }
      } catch (error) {
        toast.error(error.message)
      }
    }

    useEffect(()=>{
        document.body.style.overflow = 'hidden';
        return()=>{
            document.body.style.overflow = 'unset';
        }
    },[])
  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
      <form onSubmit={onSubmitHandler} className='relative bg-white text-slate-500 p-10 rounded-xl'>
        <h1 className='text-center text-2xl text-neutral-700 font-medium'>{state}</h1>
        <p className='text-sm'>Welcome back! Please sign in to continue</p>
        {state !== 'Login' &&<div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
            <FaUser />
            <input className='outline-none text-sm' value={name} onChange={e => setName(e.target.value)} type="text" placeholder='Full Name' required />
        </div>}
        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
            <MdEmail />
            <input className='outline-none text-sm' value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder='Email' required />
        </div>
        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
            <RiLockPasswordFill />
            <input className='outline-none text-sm' value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder='Password' required />
        </div>
        <p className='text-sm text-blue-600 cursor-pointer my-4'>Forget Password?</p>
        <button className='bg-blue-600 w-full text-white py-2 rounded-full'>{state === 'Login' ? 'Login' : 'Create Account'}</button>
        {state === 'Login' ?<p className='mt-5 text-center'>Don't have an account? <span className='text-blue-600 cursor-pointer' onClick={()=>setState('Sign Up')}>Sign up</span></p>
        :
        <p className='mt-5 text-center'>Already have an account? <span className='text-blue-600 cursor-pointer' onClick={()=>setState('Login')}>Login</span></p>}
        <FaXmark onClick={()=>setShowLogin(false)}  className='absolute top-5 right-5 cursor-pointer'/>
      </form>
    </div>
  )
}

export default Login
