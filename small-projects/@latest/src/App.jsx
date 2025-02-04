import { useState } from 'react'
import Timer from './Timer'

function App() {
  const [task, setTask] = useState('')
  const [data, setData] = useState([])

  const addTask = (e) => {
    e.preventDefault()
    if(task.trim()){
      setData([...data, {id: Date.now(), name:task, completed:false}])
      setTask('')
      console.log(data)
    }
  }

  const toggleTask = (id) => {
    setData(data.map((t)=> t.id === id ? {...t, completed : !t.completed } : t))
  }

  return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={addTask}>
        <input placeholder='Enter Your ToDo...' type="text" value={task} onChange={(e)=>setTask(e.target.value)}  />
        <button type='submit'>Add Task</button>
      </form>
      <ul>
        {data.map((t)=>(
          <li key={t.id}>{t.name}
          <button onClick={toggleTask(t.id)}>{t.completed ? 'Undo' : 'Completed'}</button>
          </li>
        ))}
      </ul>
      <Timer/>
    </>
  )
}

export default App
