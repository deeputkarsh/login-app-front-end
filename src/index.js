import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles/App.scss'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { reduxstore } from './reduxHelpers'
import * as serviceWorker from './serviceWorker'
import 'bootstrap/dist/css/bootstrap.min.css'
import interceptor from './interceptor'

interceptor.setupInterceptors(reduxstore.store)
ReactDOM.render(
  <Provider store={reduxstore.store} >
    <PersistGate loading={null} persistor={reduxstore.persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
