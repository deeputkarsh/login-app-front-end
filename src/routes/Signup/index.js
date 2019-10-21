import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { TextField, FormControl, Button } from '@material-ui/core'

import { AppAction, SignupAction, SnackbarAction } from 'Redux'

import styles from 'Styles/index.scss'
import { getRouteChangeEffect } from 'Utils'

const Signup = (props) => {
  useEffect(() => { isLoggedIn && props.history.push('/dashboard') })
  useEffect(getRouteChangeEffect(props.history, props.onRouteChange))
  const { mobile, name, email, password, isLoggedIn } = props

  const onInputChange = ({ target: { value } }, fieldName) => {
    props.onInputChange({ [fieldName]: value })
  }

  const onSignupClick = (event) => {
    if (!mobile || !password) {
      props.showError('Enter valid mobile & password')
    } else {
      // Execute only 'Click' Events or Enter 'keyup' Event
      const { type, keyCode } = event
      if (type !== 'click' && (type === 'keyup' && keyCode !== 13)) { return }
      props.signup({ mobile, name, email, password })
    }
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
              name='email'
              label='email'
              variant='outlined'
              type='email'
              placeholder='Email'
              className={styles.loginInput}
              required
              value={email}
              onChange={e => onInputChange(e, 'email')}
            />
          </FormControl>
          <FormControl style={{ width: '100%' }}>
            <TextField
              name='name'
              label='Name'
              variant='outlined'
              type='text'
              placeholder='Name'
              className={styles.loginInput}
              required
              value={name}
              onChange={e => onInputChange(e, 'name')}
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
            />
          </FormControl>
        </form>
        <Button color='primary' size='large' variant='contained' className={styles.loginArrow} onKeyUp={onSignupClick} onClick={onSignupClick}> Register </Button>
      </div>
    </div>
  )
}

const mapStateToProps = ({ signupStore, appStore: { isLoggedIn } }) => ({ ...signupStore, isLoggedIn })

const { onInputChange, signup } = SignupAction
const mapdispatchtoprops = {
  signup,
  onInputChange,
  showError: SnackbarAction.show,
  onRouteChange: AppAction.onRouteChange
}
export default connect(mapStateToProps, mapdispatchtoprops)(Signup)
