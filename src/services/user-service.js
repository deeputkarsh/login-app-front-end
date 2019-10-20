import Axios from 'axios'

const USER_END_POINT = process.env.LOGIN_API_ENDPOINT + '/user'
export const USER_API = {
  LOGIN: USER_END_POINT + '/login',
  LOGOUT: USER_END_POINT + '/logout',
  SIGNUP: USER_END_POINT + '/signup',
  GET_USER_DATA: USER_END_POINT + '/',
  UPDATE_PROFILE: USER_END_POINT + '/updateProfile'
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
