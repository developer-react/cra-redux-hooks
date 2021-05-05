const INITIAL_STATE = {
  task: '',
  tasksArray: ['Tarefa1', 'tarefa 2']
}

const actions = {
  add: task => ({
    payload: task,
    type: 'TODO_ADD'
  }),
  remove: task => ({
    payload: task,
    type: 'TODO_REMOVE'
  }),
  getAll: tasks => ({
    payload: tasks,
    type: 'TODO_GET_ALL'
  }),
}

const todoReducer = (state = INITIAL_STATE, action) => {
  const { payload, type } = action
  const { tasksArray } = state

  switch (type) {
    case 'TODO_ADD':
      return { ...state, tasksArray: [...tasksArray, payload] }
    case 'TODO_REMOVE':
      return { ...state, tasksArray: tasksArray.filter((item, idx) => idx !== payload) }
    default:
      return state;
  }
}

export { todoReducer, actions }