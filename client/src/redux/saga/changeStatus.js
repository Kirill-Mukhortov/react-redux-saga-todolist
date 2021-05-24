import { takeEvery, call, put } from 'redux-saga/effects'
import { CHANGE_STATUS_SAGA } from '../types/todosTypes'
import { changeStatusTodoOnServer } from '../actionCreators/todosAC'

const getAllTodosFromServer = (id) => fetch(`${process.env.REACT_APP_API_URL}/api/v1/todos`, {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ id }),
}).then((response) => response.json())

function* changeStatusSagaWorker(action) {
  try {
    const updatedTodo = yield call(getAllTodosFromServer, action.payload)
    console.log({ updatedTodo })
    yield put(changeStatusTodoOnServer(updatedTodo))
  } catch (error) {
    console.log(error)
  }
}

function* changeStatusSagaWatcher() {
  yield takeEvery(CHANGE_STATUS_SAGA, changeStatusSagaWorker)
}

export default changeStatusSagaWatcher
