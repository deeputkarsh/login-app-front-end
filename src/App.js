import React, { Component } from 'react'
import { Header, Footer, Router } from './components'
import { connect } from 'react-redux'
import { onRouteChange } from './reduxHelpers'

class App extends Component {
  componentDidMount () {
    if (typeof window !== 'undefined') {
      let app = this
      window.onhashchange = (event) => {
        const route = event.newURL.split('#')[1] || ''
        app.props.onRouteChange(route.replace('/', ''))
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

export default connect(null, { onRouteChange })(App)
