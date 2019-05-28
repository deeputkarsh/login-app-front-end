import {
  CLEAR_AUTH,
  FETCH_LOGIN_SUCCESS,
  LOAD_USER_DATA
} from '../constants'

const initialState = {
  token: '',
  user: {
    id: '',
    name: '',
    email: '',
    mobile: ''
  }
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_USER_DATA :
      const {
        id,
        name,
        email,
        mobile
      } = action.data
      return {
        ...state,
        user: { id, name, email, mobile }
      }
    case FETCH_LOGIN_SUCCESS:
      return {
        ...state,
        token: action.data
      }
    case CLEAR_AUTH:
      return { ...state, token: '', user: null }
    default:
      return state
  }
}
