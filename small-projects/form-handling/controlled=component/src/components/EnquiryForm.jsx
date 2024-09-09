import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

        if(formData.index===''){
        const checkFilterUser = userData.filter((v)=>v.useremail==formData.useremail || v.userphone==formData.userphone)
        if(checkFilterUser.length==1){
            toast.error('Email or Phone already Exists....')
        }else{

            const oldUserData = [...userData,currentUserFormData]
            setUserData(oldUserData)
            setFormData(
                {
                    username:'',
                    useremail:'',
                    userphone:'',
                    usermessage:'',
                    index:'',
                }
            )
            console.log(oldUserData)
        }
    }else{
        const editIndex = formData.index
        const oldData = userData
        const checkFilterUser = userData.filter((v,i)=>(v.useremail==formData.useremail || v.userphone==formData.userphone) && i!=editIndex)
        if(checkFilterUser.length==0){
        oldData[editIndex]['username']=formData.username
        oldData[editIndex]['useremail']=formData.useremail
        oldData[editIndex]['userphone']=formData.userphone
        oldData[editIndex]['usermessage']=formData.usermessage
        setUserData(oldData)
        setFormData(
            {
                username:'',
                useremail:'',
                userphone:'',
                usermessage:'',
                index:'',
            }
        )
    }else{
        toast.error('Email or Phone already Exists...')
    }
    }
        event.preventDefault();
    }

    const handleDelete = (indexNumber) => {
        const filterDataAfterDelete = userData.filter((v,i)=> i!=indexNumber)
        setUserData(filterDataAfterDelete)
        toast.success('Row Deleted Successfully...')
    }
    const handleEdit = (indexNumber) => {
        const editData = userData.filter((v,i)=>i==indexNumber)[0]
        console.log(editData)
        editData['index'] = indexNumber
        console.log(editData)
        setFormData(editData)
    }

  return (
    <div>
      <div className="container px-4 mx-auto">
        <ToastContainer/>
        <div className="row flex justify-start space-x-6">
            <div className="lg:w-[35%]">
                <h1 className='text-3xl font-bold my-4'>Enquiry Form</h1>
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
            {/* user data table */}
            <div className="relative lg:w-[65%] mt-24 sm:rounded-lg">
                <table className='text-left rtl:text-right text-gray-600 dark:text-gray-400'>
                    <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                        <tr>
                            <th scope="col" className="p-3">Id</th>
                            <th scope="col" className="p-3">Name</th>
                            <th scope="col" className="p-3">Email</th>
                            <th scope="col" className="p-3">Phone</th>
                            <th scope="col" className="p-3">Message</th>
                            <th scope="col" className="p-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
            {userData.length>=1 
            ? 
            userData.map((item, i) => (
                <tr key={i} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <td className="p-3">{i+1}</td>
                <td className="p-3">{item.username}</td>
                <td className="p-3">{item.useremail}</td>
                <td className="p-3">{item.userphone}</td>
                <td className="p-3">{item.usermessage}</td>
                <td className="p-3 flex">
                    <button className='bg-black/10 mx-1 p-2 rounded-lg' onClick={()=>handleEdit(i)}>Edit</button>
                    <button className='bg-black/10 mx-1 p-2 rounded-lg' onClick={()=>handleDelete(i)}>Delete</button>
                </td>
            </tr>   
            ))
             
             : 
            <tr><td>No Data Found</td></tr>}
                   
        </tbody>
                </table>
            </div>
        </div>
      </div>
    </div>
  )
}

export default EnquiryForm
