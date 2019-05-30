import React, { Component } from 'react'
import { Header, Footer, Router } from './components'
import { connect } from 'react-redux'
import { actions } from './reduxHelpers'

const { onRouteChange } = actions.commonActions
const { verifyUser } = actions.loginActions
class App extends Component {
  componentDidMount () {
    if (typeof window !== 'undefined') {
      let app = this
      window.onhashchange = (event) => {
        const route = event.newURL.split('#')[1] || ''
        app.props.onRouteChange(route.replace('/', ''))
      }
      if (app.props.token) {
        app.props.verifyUser(app.props.token)
      }
      const route = window.location.hash.split('#')[1] || ''
      app.props.onRouteChange(route.replace('/', ''))
    }
    if (typeof document !== 'undefined') {
      document.getElementsByTagName('body')[0].className = 'simple-login-app'
    }
  }

  render () {
    return (
      <div className='App'>
        <Header />
        <Router />
        <Footer />
        <div className='app-background' />
      </div>
    )
  }
}

export default connect((state) => {
  console.log(state)
  const { auth } = state
  return { token: auth.token }
}, { onRouteChange, verifyUser })(App)
