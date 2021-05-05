import { createAction, handleActions } from 'redux-actions'

const state = {
  task: '',
  tasksArray: ['Tarefa1', 'tarefa 2']
}

const actions = {
  add: createAction('TODO_ADD'),
  remove: createAction('TODO_REMOVE')
}

const reducer = handleActions({
  [actions.add]: (state, action) => {
    return { ...state, tasksArray: [...state.tasksArray, action.payload] }
  },

  [actions.remove]: (state, action) => {
    return { ...state, tasksArray: state.tasksArray.filter((item, idx) => idx !== action.payload) }
  }

}, state)


// const actions = { 
//   add: task => ({ 
//     payload: task, 
//     type: 'TODO_ADD' 
//   }), 
//   remove: task => ({ 
//     payload: task, 
//     type: 'TODO_REMOVE' 
//   }), 
//   getAll: tasks => ({ 
//     payload: tasks, 
//     type: 'TODO_GET_ALL' 
//   }), 
//   add: createAction('TODO_ADD'), 
//   remove: createAction('TODO_REMOVE') 
// } 


// const reducer = (state = INITIAL_STATE, action) => {
//   const { payload, type } = action
//   const { tasksArray } = state
  
//   switch (type) {
//     case 'TODO_ADD':
//       return { ...state, tasksArray: [...tasksArray, payload] }
//     case 'TODO_REMOVE':
//       return { ...state, tasksArray: tasksArray.filter((item, idx) => idx !== payload) }
//     default:
//       return state;
//   }
// }

export { 
  reducer as todoReducer, 
  actions as todoActions 
}
