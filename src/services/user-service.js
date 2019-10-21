import Axios from 'axios'

const USER_END_POINT = process.env.LOGIN_API_ENDPOINT + '/user'
const USER_API = {
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
    const Authorization = `Basic ${credentials}`
    return Axios.get(USER_API.LOGIN, { headers: { Authorization } })
  },

  getUserData () {
    return Axios.get(USER_API.SIGNUP, { headers: { setBearerAuth: true } })
  },

  updateProfile (userData) {
    return Axios.post(USER_API.UPDATE_PROFILE, userData, { headers: { setBearerAuth: true } })
  },

  logout () {
    return Axios.get(USER_API.LOGOUT, { headers: { setBearerAuth: true } })
  }
}
