import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadUser } from '../reduxHelpers'
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
      route,
      loadUser
    } = this.props
    const { Container, routeClass } = this.getComponent(route)

    return (
      <div className={`route-holder ${routeClass}`}>
        <Container loadUser={loadUser} />
      </div>
    )
  }
}

export const Router = connect(state => ({ route: state.route }), { loadUser })(RouterComponent)
