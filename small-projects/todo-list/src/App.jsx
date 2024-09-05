import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import TodoListItems from './Components/TodoListItems';

const App = () => {

  const [todoList,setTodoList] = useState([])

  const saveToDoList = (e) => {
    e.preventDefault();
  const todoName = e.target.todoName.value;
  if(!todoList.includes(todoName)){
    let finalTodoList = [...todoList,todoName]
    setTodoList(finalTodoList)
  }else{
    toast.error('Todo Name already Exists...')
  }
  }
  const list = todoList.map((value,index) => (
    <TodoListItems value={value} key={index} indexNumber={index} todoList={todoList} setTodoList={saveToDoList}/>
  ))

  return (
    <div className='w-[1100px] mx-auto'>
      <h1 className='text-center text-4xl font-bold font-serif my-5'>ToDo List</h1>
      <form onSubmit={saveToDoList} className='flex gap-10 my-3'>
        <input className='h-10 basis-[80%] border border-black rounded-lg p-2' name='todoName' type="text" />
        <button className='basis-[20%] bg-gray-400 hover:bg-slate-300 rounded-lg duration-300 font-semibold font-serif '>Save</button>
      </form>
      <div>
        <ul className='mt-12'>
          {list}
        </ul>
      </div>
      <ToastContainer />
    </div>
  )
}

export default App
