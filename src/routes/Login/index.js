import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { TextField, FormControl, Button } from '@material-ui/core'

import { LoginAction, AppAction, SnackbarAction } from 'Redux'

import styles from 'Styles/index.scss'
import { getRouteChangeEffect } from 'Utils'

const Login = (props) => {
  useEffect(() => { isLoggedIn && props.history.push('/dashboard') })
  useEffect(getRouteChangeEffect(props.history, props.onRouteChange))
  const { mobile, password, isLoggedIn } = props

  const onInputChange = ({ target: { value } }, fieldName) => {
    props.onInputChange({ [fieldName]: value })
  }

  const onLoginClick = (event) => {
    if (mobile.length <= 0 || password.length <= 0) {
      props.showError('Enter valid mobile & password')
    } else {
      // Execute only 'Click' Events or Enter 'keyup' Event
      const { type, keyCode } = event
      if (type !== 'click' && (type === 'keyup' && keyCode !== 13)) { return }
      props.login({ mobile, password })
    }
  }
  const onPasswordEnter = (event) => {
    if (event.keyCode === 13) { props.login({ mobile, password }) }
  }

  return (
    <div className={styles.loginInnerWrapper}>
      <div className={styles.loginContent}>
        <form className={styles.loginForm}>
          <FormControl style={{ width: '100%' }}>
            <TextField
              name='mobile'
              label='Mobile'
              variant='outlined'
              type='text'
              placeholder='Mobile'
              className={styles.loginInput}
              required
              value={mobile}
              onChange={e => onInputChange(e, 'mobile')}
            />
          </FormControl>
          <FormControl style={{ width: '100%' }}>
            <TextField
              name='password'
              label='Password'
              variant='outlined'
              type='password'
              placeholder='Password'
              className={styles.loginInput}
              required
              value={password}
              onChange={e => onInputChange(e, 'password')}
              onKeyUp={onPasswordEnter}
            />
          </FormControl>
        </form>
        <Button color='primary' size='large' variant='contained' className={styles.loginArrow} onKeyUp={onLoginClick} onClick={onLoginClick}> Login </Button>
      </div>
    </div>
  )
}

const mapStateToProps = ({ loginStore, appStore: { isLoggedIn } }) => ({ ...loginStore, isLoggedIn })

const { onInputChange, login } = LoginAction
const mapdispatchtoprops = {
  login,
  onInputChange,
  showError: SnackbarAction.show,
  onRouteChange: AppAction.onRouteChange
}
export default connect(mapStateToProps, mapdispatchtoprops)(Login)
