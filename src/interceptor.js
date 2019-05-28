import Axios from 'axios'
import { actions } from './reduxHelpers'

const { showLoader, hideLoader, errorHandler } = actions.commonActions
const { clearAuth } = actions.loginActions
const setupInterceptors = store => {
  // Requests interceptor
  Axios.interceptors.request.use(
    function (config) {
      store.dispatch(showLoader())
      return config
    },
    function (error) {
      store.dispatch(hideLoader())
      handleError(store, error)
      return Promise.reject(error)
    }
  )

  // Response interceptor
  Axios.interceptors.response.use(
    function (response) {
      store.dispatch(showLoader())
      return response
    },
    function (error) {
      store.dispatch(hideLoader())
      handleError(store, error)
      return Promise.reject(error)
    }
  )
}
const handleError = (store, error) => {
  let err = error.response ? error.response.data : error
  err.timestamp = Date.now()
  if (
    (err.statusCode === 500 &&
      err.message === 'INTERNAL SERVER ERROR: jwt expired!!') ||
    err.statusCode === 401
  ) {
    store.dispatch(errorHandler(err))
    store.dispatch(clearAuth())
  } else {
    store.dispatch(errorHandler(err))
  }
}

export default {
  setupInterceptors
}
