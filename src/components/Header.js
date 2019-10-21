import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import styles from 'Styles/index.scss'
import { LoginAction } from '../redux'
import { Button } from '@material-ui/core'

const Component = ({ isLoggedIn, route, logout }) => {
  const showSignup = route !== '/signup'
  return (
    <header className={styles.headerWrapper}>
      <Link className={styles.logoContainer} to='/' />
      {isLoggedIn && <Button color='primary' size='large' variant='outlined' onClick={logout}> Logout </Button>}
      {!isLoggedIn && showSignup && (
        <Link to='/signup' className={styles.headerLinkBtn}>
          <Button color='primary' size='large' variant='outlined'> Sign Up </Button>
        </Link>)}
    </header>
  )
}
const mapStateToProps = ({ appStore }) => ({ ...appStore })

const { logout } = LoginAction
export const Header = connect(mapStateToProps, { logout })(Component)
