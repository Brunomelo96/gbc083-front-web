import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import mySagas from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(mySagas)

export default store
