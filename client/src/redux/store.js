/* eslint-disable max-len */
import createSagaMiddleware from 'redux-saga'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger/src'
import initState from './initState'
import rootReducer from './reducers/rootReducer'
import rootSaga from './saga/rootSaga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, initState, composeWithDevTools(applyMiddleware(thunk, sagaMiddleware, logger)))

sagaMiddleware.run(rootSaga)

export default store
