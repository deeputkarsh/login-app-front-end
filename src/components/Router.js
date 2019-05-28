import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Signin, Register, UnderConstruction, NotFoundPage, Profile } from './routes'
import { routes } from '../constants'

class RouterComponent extends Component {
  getComponent (route) {
    let Container
    let routeClass = ''
    switch (route) {
      case routes.HOME :
        Container = UnderConstruction
        routeClass = 'home'
        break
      case routes.REGISTER :
        Container = Register
        routeClass = 'signup'
        break
      case routes.SIGNIN :
        Container = Signin
        routeClass = 'login'
        break
      case routes.PROFILE :
        Container = Profile
        route = 'edit-profile'
        break
      default :
        Container = NotFoundPage
        routeClass = 'not-found'
        break
    }
    return { Container, routeClass }
  }
  render () {
    const {
      route
    } = this.props
    const { Container, routeClass } = this.getComponent(route)

    return (
      <div className={`route-holder ${routeClass}`}>
        <Container />
      </div>
    )
  }
}

export const Router = connect(state => {
  const { appState } = state
  return { route: appState.route }
})(RouterComponent)
