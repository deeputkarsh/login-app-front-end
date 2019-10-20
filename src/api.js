import Axios from 'axios'

const { LOGIN_API_ENDPOINT } = process.env

export const USER_API = {
  LOGIN: LOGIN_API_ENDPOINT + '/login',
  SIGNUP: LOGIN_API_ENDPOINT + '/signup',
  GET_USER_DATA: LOGIN_API_ENDPOINT + '/getUserData',
  UPDATE_PROFILE: LOGIN_API_ENDPOINT + '/updateProfile'
}

const apiUrl = process.env.REACT_APP_API_URL

export const UserService = {
  signup (userData) {
    return Axios.post(`${apiUrl}/signup`, userData)
  },

  login (credentials) {
    return Axios.post(`${apiUrl}/login`, credentials)
  },

  getUserData (token) {
    return Axios.get(`${apiUrl}/getUserData`, {
      headers: { Authorization: `Bearer ${token}` }
    })
  },

  updateProfile (userData, token) {
    return Axios.post(`${apiUrl}/updateProfile`, userData, {
      headers: { Authorization: `Bearer ${token}` }
    })
  },

  logout (token) {
    return Axios.get(`${apiUrl}/logout`, {
      headers: { Authorization: `Bearer ${token}` }
    })
  }
}
