import {
  CLEAR_AUTH,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_FAILURE,
  LOAD_USER_DATA
} from '../constants'
import { UserService } from '../../services/user-service'
import { errorHandler, changeRoute } from './common-actions'

export const loadUser = (data) => ({
  type: LOAD_USER_DATA,
  data: data
})

export const verifyUser = (token) => dispatch => {
  UserService.getUserData(token).then(response => {
    if (response.data.isSuccess) {
      dispatch(loadUser(response.data.data))
    } else {
      dispatch(errorHandler({ message: 'Session Expired' }))
      dispatch(clearAuth())
    }
  })
}

export const loginUser = data => dispatch => {
  UserService.login(data).then(response => {
    if (response.data.isSuccess) {
      const token = response.data.token
      // const userData = response.data.data
      dispatch(loginResponseFetched(token))
      dispatch(changeRoute(''))
      dispatch(verifyUser(token))
    } else {
      dispatch(errorHandler({ message: 'Login failed' }))
      dispatch(clearAuth())
    }
  })
}

export const logOutUser = token => dispatch => {
  UserService.logout(token).then(response => {
    if (response.data.isSuccess) {
      dispatch(clearAuth())
      dispatch(changeRoute(''))
    } else {
      dispatch(errorHandler({ message: 'Logout failed' }))
    }
  })
}

export const loginResponseFetched = data => ({
  type: FETCH_LOGIN_SUCCESS,
  data: data
})

export const loginFailed = error => ({
  type: FETCH_LOGIN_FAILURE,
  error: error
})

export const clearAuth = () => ({
  type: CLEAR_AUTH
})
