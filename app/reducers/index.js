import { combineReducers } from 'redux'

import todos from './todos.js'

const rootReducer = combineReducers({
  // state: (state = {}) => state,
  todos: todos
})

export default rootReducer
