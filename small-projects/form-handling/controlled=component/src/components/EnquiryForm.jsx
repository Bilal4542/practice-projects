import React, { useState } from 'react'

const EnquiryForm = () => {
    const [formData,setFormData] = useState(
        {
            username:'',
            useremail:'',
            userphone:'',
            usermessage:'',
            index:'',
        }
    )

    const [userData,setUserData] = useState([])

    const getValue = (event) => {
        const oldData = {...formData};
        const inputName = event.target.name;
        const inputValue = event.target.value;
        oldData[inputName] = inputValue;
        setFormData(oldData);
    }

    const handleSubmit = (event) => {
        const currentUserFormData = {
            username:formData.username,
            useremail:formData.useremail,
            userphone:formData.userphone,
            usermessage:formData.usermessage
        } 
        const oldUserData = [...userData,currentUserFormData]
        setUserData(oldUserData)
        event.preventDefault();
    }

  return (
    <div>
      <div className="container px-4 mx-auto">
        <div className="row flex justify-start space-x-6">
            <div className="lg:w-[35%]">
                <h1 className='text-3xl font-bold my-4'>Enquiry Form</h1>
                {userData.length}
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col my-3">
                        <label className='my-2 font-semibold'>Username</label>
                        <input className='border-2 p-4 rounded-md' type="text" name='username' value={formData.username} onChange={getValue} />
                    </div>
                    <div className="flex flex-col my-3">
                        <label className='my-2 font-semibold'>Email</label>
                        <input className='border-2 p-4 rounded-md' type="email" name='useremail' value={formData.useremail} onChange={getValue} />
                    </div>
                    <div className="flex flex-col my-3">
                        <label className='my-2 font-semibold'>Phone</label>
                        <input className='border-2 p-4 rounded-md' type="tel" name='userphone' value={formData.userphone} onChange={getValue} />
                    </div>
                    <div className="flex flex-col my-3">
                        <label className='my-2 font-semibold'>Message</label>
                        <textarea className='border-2 p-4 rounded-md' name='usermessage' value={formData.usermessage} onChange={getValue} />
                    </div>
                    <div className=''>
              <button className='bg-black/15 py-4 px-8 font-medium text-lg rounded-md hover:bg-black/20 transition-all duration-300'>{formData.index !== "" ? 'Update' : 'Save'}</button>
            </div>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default EnquiryForm
