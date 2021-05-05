import React, { useState } from 'react'

const App = () => {
  const [task, setTask] = useState('')
  const [tasksArray, setTasksArray] = useState(['tarefa 1'])

  const handleInputChange = event => {
    setTask(event.target.value)
  }

  const handleFormSubmit = event => {
    event.preventDefault()
    setTasksArray( oldTasks => [...oldTasks, task]);
    setTask('')
  }

  const handleRemove = (event, i) => {
    event.preventDefault()
    let removeTasksArray = tasksArray.filter((item, idx) => idx !== i)
    setTasksArray( removeTasksArray );
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input onChange={handleInputChange} value={task} />
        <button>Add</button>
      </form>
      <ul>
        {tasksArray.map((t, i) => (
          <li key={i}>{t} <button onClick={(event) => handleRemove(event, i)}>done</button> </li>
        ))}
      </ul>
    </>
  )
}

export default App
