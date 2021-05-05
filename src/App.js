import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { actions as todoActions } from './store/reducers/todo'

const App = () => {
  const [task, setTask] = useState('')
  const dispatch = useDispatch()
  const tasksArray = useSelector(state => state.todoReducer.tasksArray)

  const handleInputChange = event => {
    setTask(event.target.value)
  }

  const handleFormSubmit = event => {
    event.preventDefault()
    if(task === '') { return  }
    dispatch(todoActions.add(task))
    setTask('')
  }

  const handleRemove = (event, task) => {
    event.preventDefault()
    dispatch(todoActions.remove(task));
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
