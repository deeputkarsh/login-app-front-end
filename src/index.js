import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles/App.scss'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { appState } from './reduxHelpers'
import * as serviceWorker from './serviceWorker'
import 'bootstrap/dist/css/bootstrap.min.css'

const store = createStore(appState)

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
