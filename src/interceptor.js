import axios from 'axios'

// const localStorage = window.localStorage

const setupInterceptors = store => {
  axios.interceptors.request.use(
    config => {
      config.headers['content-type'] = 'application/json'
      // change any global config on request
      // store.dispatch(showLoader())
      return config
    },
    error => {
      // Do something with request error
      // store.dispatch(hideLoader())
      handleError(store, error)
      return Promise.reject(error)
    }
  )

  axios.interceptors.response.use(
    config => {
      if (config.status === 200) {
        // change something on response success
        // store.dispatch(showLoader())
        return config
      }
    },
    error => {
      // store.dispatch(hideLoader())
      handleError(store, error)
      return Promise.reject(error)
    }
  )
}
const handleError = (store, error) => {
  let err = error.response ? error.response.data : error
  err.timestamp = Date.now()
  if (error && error.response && error.response.status === 406) {
    /* localStorage.clear()
    window.location.href = '/' */
  }
  /* if (
    (err.statusCode === 500 &&
      err.message === 'INTERNAL SERVER ERROR: jwt expired!!') ||
    err.statusCode === 401
  ) {
    store.dispatch(errorHandler(err))
    store.dispatch(clearAuth())
  } else {
    store.dispatch(errorHandler(err))
  } */
}

export default {
  setupInterceptors
}
