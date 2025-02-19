import { useState } from "react"
import './app.css'

function App() {
  
  const [tasks,setTasks] = useState([])
  const [taskInput,setTaskInput] = useState("")

  const handleTasks = () => {
    if(taskInput.trim() !== ""){
      setTasks([...tasks, taskInput])
      setTaskInput('')
    }
  }

  const handleDelete = (index) => {
        const updateTasks = tasks.filter((_ , i) => i !== index)
        setTasks(updateTasks)
  }
  const handleUpdate = (index) => {
        const updatedTasks = prompt("Enter New Task", tasks[index])

        if(updatedTasks){
          const updatedTask = tasks.map((task,i)=>
            i === index ? updatedTasks : task
          )
          setTasks(updatedTask)
        }
  }

  return (
    <>
     <div>
      <h1>Crud App in React JS</h1>
      <input type="text" placeholder="Enter Your Task...." value={taskInput} onChange={(e)=>setTaskInput(e.target.value)}/>
      <button onClick={handleTasks}>Add Task</button>
      {tasks.map((task,index)=>(
        <li key={index}>
          {task}
          <button onClick={()=>handleDelete(index)}>Delete</button>
          <button onClick={()=>handleUpdate(index)}>Update</button>
        </li>
      ))}
     </div>
    </>
  )
}

export default App
