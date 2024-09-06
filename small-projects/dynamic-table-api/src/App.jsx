import React from 'react'
import {useEffect,useState} from 'react'
import UserData from './UserData';

const API = 'https://jsonplaceholder.typicode.com/users'

const App = () => {
  
  const [users,setUsers] = useState([]);

  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url)
      const data = await res.json();
      if(data.length > 0){
        setUsers(data)
      }
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  } 

  useEffect(() => {
    fetchUsers(API);
  }, [])


  return (
    <>
      <h1 className='text-4xl font-bold font-serif text-center my-4'>Get Data From an API and Showing it in a Table</h1>
      {/* <div className='relative overflow-x-auto'>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
          <th scope='col' className="px-6 py-3">ID</th>
          <th scope='col' className="px-6 py-3">Name</th>
          <th scope='col' className="px-6 py-3">Email</th>
          <th scope='col' className="px-6 py-3">Address</th>
          </tr>
        </thead>
        <tbody>
          <UserData users={users} />
        </tbody>
      </table>
      </div> */}
      

<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    ID
                </th>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Email
                </th>
                <th scope="col" class="px-6 py-3">
                    Address
                </th>
            </tr>
        </thead>
        <tbody>
            <UserData users={users}/>
        </tbody>
    </table>
</div>

</>
  )
}

export default App