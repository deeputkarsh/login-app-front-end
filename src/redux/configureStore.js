import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise'

import appStore from './appActions'
import snackbarStore from './snackbarActions'
import signupStore from './signupActions'
import loginStore from './loginActions'

const rootReducer = combineReducers({
  appStore,
  loginStore,
  signupStore,
  snackbarStore
})

const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware,
  thunk,
  createLogger()
)(createStore)

export function configureStore (initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState)
  return store
}
