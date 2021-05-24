import { takeEvery, call, put } from 'redux-saga/effects'
import { FETCH_INIT_TODO_SAGA } from '../types/todosTypes'
import { fetchInitTodo } from '../actionCreators/todosAC'

const getAllTodosFromServer = () => fetch(`${process.env.REACT_APP_API_URL}/api/v1/todos`)
  .then((response) => response.json())

function* todoSagaWorker(action) {
  try {
    const allTodos = yield call(getAllTodosFromServer, action.payload)
    yield put(fetchInitTodo(allTodos))
  } catch (error) {
    console.log(error)
  }
}

function* fetchTodoSagaWatcher() {
  yield takeEvery(FETCH_INIT_TODO_SAGA, todoSagaWorker)
}

export default fetchTodoSagaWatcher
