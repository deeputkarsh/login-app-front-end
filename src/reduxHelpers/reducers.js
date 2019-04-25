import { ROUTE_CHANGE, LOAD_USER_DATA, LOG_OUT_USER } from './constants'
import { routes } from '../constants'

const initialState = {
  route: routes.HOME,
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    mobile: ''
  }
}

export const appState = (state = initialState, action = {}) => {
  const data = action.payload
  switch (action.type) {
    case ROUTE_CHANGE :
      const routeState = getRouteState(data)
      return { ...state, ...routeState }
    case LOAD_USER_DATA :
      return {
        ...state,
        user: { ...data },
        isSignedIn: true
      }
    case LOG_OUT_USER :
      return initialState
    default :
      return state
  }
}

const getRouteState = (route) => {
  route = route || routes.HOME
  switch (route) {
    case routes.LOGOUT :
      return {
        isSignedIn: false,
        user: initialState.user,
        route: routes.HOME
      }
    default :
      return { route }
  }
}
