import React, { useState } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { actions as todoActions } from './store/reducers/todo'

const App = ({ addTask, removeTask, tasksArray }) => {
  const [task, setTask] = useState('')

  const handleInputChange = event => {
    setTask(event.target.value)
  }

  const handleFormSubmit = event => {
    event.preventDefault()
    addTask(task)
    setTask('')
  }

  const handleRemove = (event, task) => {
    event.preventDefault()
    removeTask(task);
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

const mapStateToProps = (state) => ({ tasksArray: state.todoReducer.tasksArray })

const mapDispatchToProps = (dispatch) => ({
  addTask: bindActionCreators(todoActions.add, dispatch),
  removeTask: bindActionCreators(todoActions.remove, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
