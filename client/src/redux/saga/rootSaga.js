import { all } from 'redux-saga/effects'
import fetchTodoSagaWatcher from './fetchTodo'
import changeStatusSagaWatcher from './changeStatus'

export default function* rootSaga() {
  yield all([
    fetchTodoSagaWatcher(),
    changeStatusSagaWatcher(),
  ])
}
