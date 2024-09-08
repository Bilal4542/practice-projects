import React, { useState } from 'react'
import EnquiryForm from './components/EnquiryForm'

const App = () => {
  // const [uname,setUname] = useState('');
  // const [password,setPassword] = useState('');


  // const handleSubmit = (event) => {
  //     event.preventDefault();
  // }

  // const getUname = (event) => {
  //   setUname(event.target.value)
  // }
  // const getPassword = (event) => {
  //   setPassword(event.target.value)
  // }


  return (
    <div>
      <EnquiryForm/>
      {/* <div className="container m-auto px-4">
        <div className="row">
          <div className="lg:w-1/2">
          <h1 className='text-3xl font-bold my-4'>Form Handling</h1>
            <form onSubmit={handleSubmit}>
                  <div className="flex flex-col my-5">
                    <label  className='my-2' htmlFor="">Username</label>
                    <input className='border-2 p-4 rounded-md' type="text" onChange={(event)=>setUname(event.target.value)} value={uname} />
                  </div>
                  <div className="flex flex-col my-5">
                    <label  className='my-2' htmlFor="">Password</label>
                    <input className='border-2 p-4 rounded-md' type="password" onChange={(event)=>setPassword(event.target.value)} value={password} />
                  </div>
                  <div>
                  <button className='bg-black/15 py-4 px-8 font-medium text-lg rounded-md hover:bg-black/20 transition-all duration-300'>Login</button>
                  </div>
            </form>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default App
