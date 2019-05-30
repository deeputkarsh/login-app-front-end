import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap'
import '../styles/Header.scss'
import { routes, allNavItems, accessibilities, homeNavItem } from '../constants'
import { actions } from '../reduxHelpers'

export class HeaderComponent extends Component {
  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      dropdownOpen: false
    }
  }

  toggle (value) {
    value.dropdownOpen = !value.dropdownOpen
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }

  getNavItems (itemList) {
    return itemList.map((value, index) => {
      let returnHtm = null
      if (value.type === 'dropdown') {
        returnHtm = (
          <Dropdown key={`nav-items-${value.text}-${index}`} inNavbar nav isOpen={value.dropdownOpen} toggle={() => this.toggle(value)}>
            <DropdownToggle nav caret>{value.text}</DropdownToggle>
            <DropdownMenu right>
              {value.dropdownItems.map((item, index) => {
                const itemEvents = {}
                if (item.route) {
                  itemEvents.onClick = () => {
                    if (item.route === 'logout') {
                      this.props.logOutUser(this.props.token)
                    } else {
                      this.props.changeRoute(item.route)
                    }
                  }
                }
                if (index === 0) {
                  item.text = this.props.userName
                }
                return (
                  <DropdownItem key={`nav-drop-${item.text}-${index}`} {...item.attr} {...itemEvents}>{item.text}</DropdownItem>
                )
              })}
            </DropdownMenu>
          </Dropdown>
        )
      } else {
        let navAttr = {
          href: `#/${value.route === routes.HOME ? '' : value.route}`
        }
        navAttr.active = this.props.route === value.route
        returnHtm = (
          <NavItem key={`nav-items-${value.text}-${index}`}>
            <NavLink {...navAttr}>{value.text}</NavLink>
          </NavItem>
        )
      }
      return returnHtm
    })
  }

  render () {
    const navLinks = ((isSignedIn) => {
      if (isSignedIn) {
        return allNavItems.filter(ele => ele.accessibility.includes(accessibilities.LOGGED_IN))
      } else {
        return allNavItems.filter(ele => ele.accessibility.includes(accessibilities.NOT_LOGGED_IN))
      }
    })(!!this.props.token)
    return (
      <div className='site-header'>
        <Nav tabs>
          <div className='nav-group'>{this.getNavItems([homeNavItem])}</div>
          <div className='nav-group'>{this.getNavItems(navLinks)}</div>
        </Nav>
      </div>
    )
  }
}
const { loginActions: { logOutUser }, commonActions: { changeRoute } } = actions
export const Header = connect(state => {
  const { appState, auth } = state
  return {
    route: appState.route,
    token: auth.token,
    userName: auth.user ? auth.user.name : 'USER'
  }
}, { changeRoute, logOutUser })(HeaderComponent)
