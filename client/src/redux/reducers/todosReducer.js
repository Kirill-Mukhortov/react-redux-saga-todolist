/* eslint-disable object-curly-newline */
import { ADD_EDIT, ADD_TODO, CHANGE_STATUS, DELETE_TODO, FETCH_INIT_TODO, SEND_EDIT } from '../types/todosTypes'

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_INIT_TODO:
      return action.payload
    case ADD_TODO:
      return [
        ...state,
        action.payload,
      ]
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload)
    case CHANGE_STATUS:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            completed: !todo.completed,
            completedDate: action.payload.completedDate,
          }
        }
        return todo
      })
    case SEND_EDIT:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return action.payload
        }
        return todo
      })
    case ADD_EDIT:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            edit: true,
          }
        }
        return {
          ...todo,
          edit: false,
        }
      })
    default:
      return state
  }
}

export default todosReducer
