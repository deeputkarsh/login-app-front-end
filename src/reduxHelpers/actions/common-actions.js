import {
  ROUTE_CHANGED,
  ERROR_HANDLER,
  SHOW_LOADER,
  CHANGE_ROUTE,
  HIDE_LOADER
} from '../constants'

export const onRouteChange = (data) => ({
  type: ROUTE_CHANGED,
  payload: data
})
export const changeRoute = data => ({
  type: CHANGE_ROUTE,
  payload: data
})
export const showLoader = (action) => ({
  type: SHOW_LOADER,
  payload: action
})
export const hideLoader = (action) => ({
  type: HIDE_LOADER,
  payload: action
})

export const errorHandler = (action) => ({
  type: ERROR_HANDLER,
  payload: action
})
