import React, { useState, useEffect } from 'react'
import { store } from './store'
import { actions as todoActions } from './store/reducers/todo'

const App = () => {
  const [task, setTask] = useState('')
  const [tasksArray, setTasksArray] = useState(['tarefa 3'])

  useEffect(() => {
    setTasksArray( store.getState().todoReducer.tasksArray);

    store.subscribe(() => {
      setTasksArray(store.getState().todoReducer.tasksArray);
    })
  }, [])

  const handleInputChange = event => {
    setTask(event.target.value)
  }

  const handleFormSubmit = event => {
    event.preventDefault()
    //setTasksArray( oldTasks => [...oldTasks, task]);
    store.dispatch(todoActions.add(task))
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
          <li key={i}> {t} <button onClick={(event) => handleRemove(event, i)}>done</button> </li>
        ))}
      </ul>
    </>
  )
}

export default App
