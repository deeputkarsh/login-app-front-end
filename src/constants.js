export const routes = {
  HOME: 'home',
  REGISTER: 'register',
  SIGNIN: 'signin',
  PROFILE: 'profile',
  LOGOUT: 'logout'
}

export const accessibilities = {
  LOGGED_IN: 'LOGGED_IN',
  NOT_LOGGED_IN: 'LOGGED_OUT'
}

export const homeNavItem = {
  text: 'Home',
  route: routes.HOME,
  accessibility: `${accessibilities.LOGGED_IN},${accessibilities.NOT_LOGGED_IN}`
}
export const allNavItems = [
  {
    text: 'Sign Up',
    route: routes.REGISTER,
    accessibility: accessibilities.NOT_LOGGED_IN
  }, {
    text: 'Log In',
    route: routes.SIGNIN,
    accessibility: accessibilities.NOT_LOGGED_IN
  }, {
    text: 'My Account',
    type: 'dropdown',
    accessibility: accessibilities.LOGGED_IN,
    dropdownOpen: false,
    dropdownItems: [
      {
        text: 'User',
        attr: {
          header: true
        }
      }, {
        text: 'Edit Profile',
        route: routes.PROFILE
      }, {
        attr: {
          divider: true
        }
      }, {
        text: 'Log Out',
        route: routes.LOGOUT
      }
    ]
  }
]
