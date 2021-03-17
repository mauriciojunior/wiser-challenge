import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers'
import createSagaMiddleware from 'redux-saga'

import userSaga from '../store/user/sagas/user.sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducers, compose(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(userSaga)

export default store
