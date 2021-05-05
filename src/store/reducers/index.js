import { combineReducers} from 'redux'
import { todoReducer } from './todo'

// CombineReducers
const reducers = combineReducers({
  todoReducer
})

export { reducers }
