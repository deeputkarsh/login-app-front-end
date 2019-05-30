import { combineReducers } from 'redux'
import commonReducers from './common-reducer'
import LoginReducer from './login-reducer'

const rootReducers = combineReducers({
  appState: commonReducers,
  auth: LoginReducer
})

export default rootReducers
