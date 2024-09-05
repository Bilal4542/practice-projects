import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";


const TodoListItems = ({value,indexNumber,todoList,setTodoList}) => {
    const [status,setStatus] = useState(false)
    let deleteRow = () => {
        let finalData = todoList.filter( (value,index) => index != indexNumber)
        setTodoList(finalData)
    }
    // let checkStatus = () => {
    //     setStatus(!status)
    // }
  return (
    <div>
      <li className={`bg-gray-300 p-3 text-lg relative rounded mb-5 text-left flex items-center`}>{indexNumber+1} - {value} <span className='absolute right-3 cursor-pointer' onClick={deleteRow}><RxCross2 size={25} /></span></li>
    </div>
  )
}

export default TodoListItems
