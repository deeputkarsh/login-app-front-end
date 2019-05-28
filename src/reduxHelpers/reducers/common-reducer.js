import {
  ROUTE_CHANGED,
  SHOW_LOADER,
  HIDE_LOADER,
  ERROR_HANDLER,
  CHANGE_ROUTE
} from '../constants'
import { routes } from '../../constants'

const initialState = {
  route: routes.HOME,
  loaderCount: 0
}

export default (state = initialState, action = {}) => {
  const data = action.payload
  const currentLoaderCount = state.loaderCount || 0
  switch (action.type) {
    case ROUTE_CHANGED :
      const route = data || routes.HOME
      return { ...state, route }
    case CHANGE_ROUTE :
      changeLocationToRoute(data)
      return state
    case SHOW_LOADER :
      return { ...state, loaderCount: currentLoaderCount + 1 }
    case HIDE_LOADER :
      return { ...state, loaderCount: currentLoaderCount - 1 }
    case ERROR_HANDLER :
      return { ...state, error: { ...data } }
    default :
      return state
  }
}

const changeLocationToRoute = (route) => {
  window.location.hash = `#/${route}`
}
