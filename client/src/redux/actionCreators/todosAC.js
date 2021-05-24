import {
  ADD_EDIT,
  ADD_TODO,
  CHANGE_STATUS, CHANGE_STATUS_SAGA,
  DELETE_TODO,
  FETCH_INIT_TODO,
  FETCH_INIT_TODO_SAGA,
  SEND_EDIT,
} from '../types/todosTypes'

export const addTodoFromServer = (newTodo) => ({
  type: ADD_TODO,
  payload: newTodo,
})

export const deleteTodoOnServer = (id) => ({
  type: DELETE_TODO,
  payload: id,
})

export const changeStatusTodoOnServer = (updatedTodo) => ({
  type: CHANGE_STATUS,
  payload: updatedTodo,
})

export const changeStatusTodoOnServerSaga = (updatedTodo) => ({
  type: CHANGE_STATUS_SAGA,
  payload: updatedTodo,
})

export const sendEditTodoOnServer = (changeTodo) => ({
  type: SEND_EDIT,
  payload: changeTodo,
})

export const addEditInTodo = (id) => ({
  type: ADD_EDIT,
  payload: id,
})

export const fetchInitTodo = (payload) => ({
  type: FETCH_INIT_TODO,
  payload,
})

export const fetchInitTodoSaga = (payload) => ({
  type: FETCH_INIT_TODO_SAGA,
  payload,
})

export const addTodo = (text, category) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text, category }),
  })
  const newTodoFromServer = await response.json()
  dispatch(addTodoFromServer(newTodoFromServer))
}

export const deleteTodo = (id) => async (dispatch) => {
  await fetch(`${process.env.REACT_APP_API_URL}/api/v1/todos`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  })
    .then((response) => {
      if (response.status === 200) {
        dispatch(deleteTodoOnServer(id))
      }
    })
}

export const sendEdit = (id, newText) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/todos`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, newText }),
  })
  const editedTodoFromServer = await response.json()
  dispatch(sendEditTodoOnServer(editedTodoFromServer))
}
