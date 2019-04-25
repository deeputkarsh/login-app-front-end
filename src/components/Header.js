import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap'
import './Header.css'
import { routes, allNavItems, accessibilities } from '../constants'

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
          <Dropdown key={`nav-items-${value.text}-${index}`} nav isOpen={value.dropdownOpen} toggle={() => this.toggle(value)}>
            <DropdownToggle nav caret>{value.text}</DropdownToggle>
            <DropdownMenu>
              {value.dropdownItems.map((item, index) => {
                const itemEvents = {}
                if (item.route) {
                  itemEvents.onClick = () => {
                    window.location.hash = `#/${item.route}`
                  }
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
    })(this.props.isSignedIn)
    console.log(navLinks)
    return (
      <div className='site-header'>
        <Nav tabs>
          {this.getNavItems(navLinks)}
        </Nav>
      </div>
    )
  }
}
export const Header = connect(state => {
  return {
    route: state.route,
    isSignedIn: state.isSignedIn
  }
})(HeaderComponent)
