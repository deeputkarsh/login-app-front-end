import Axios from 'axios'

const { LOGIN_API_ENDPOINT } = process.env

export const USER_API = {
  LOGIN: LOGIN_API_ENDPOINT + '/login',
  LOGOUT: LOGIN_API_ENDPOINT + '/logout',
  SIGNUP: LOGIN_API_ENDPOINT + '/signup',
  GET_USER_DATA: LOGIN_API_ENDPOINT + '/getUserData',
  UPDATE_PROFILE: LOGIN_API_ENDPOINT + '/updateProfile'
}

export const UserService = {
  signup (userData) {
    return Axios.post(USER_API.SIGNUP, userData)
  },

  login (credentials) {
    return Axios.post(USER_API.LOGIN, credentials)
  },

  getUserData (token) {
    return Axios.get(USER_API.SIGNUP, {
      headers: { Authorization: `Bearer ${token}` }
    })
  },

  updateProfile (userData, token) {
    return Axios.post(USER_API.UPDATE_PROFILE, userData, {
      headers: { Authorization: `Bearer ${token}` }
    })
  },

  logout (token) {
    return Axios.get(USER_API.LOGOUT, {
      headers: { Authorization: `Bearer ${token}` }
    })
  }
}
