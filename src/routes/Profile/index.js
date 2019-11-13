import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { TextField, FormControl, Button } from '@material-ui/core'

import { AppAction, ProfileAction, SnackbarAction } from 'Redux'

import styles from 'Styles/index.scss'
import { getRouteChangeEffect } from 'Utils'

const Profile = (props) => {
  const { mobile, name, email, isLoggedIn } = props
  useEffect(() => { isLoggedIn || props.history.push('/') })
  useEffect(getRouteChangeEffect(props.history, props.onRouteChange))

  const onInputChange = ({ target: { value } }, fieldName) => {
    props.onInputChange({ [fieldName]: value })
  }

  const handleUpdate = (event) => {
    if (!mobile || !name || !email) {
      return props.showError('Enter valid mobile, name & email')
    }
    props.update({ mobile, name, email })
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
        </form>
        <Button color='primary' size='large' variant='contained' className={styles.loginArrow} onClick={handleUpdate}> Update </Button>
      </div>
    </div>
  )
}

const mapStateToProps = ({ profileStore, appStore: { isLoggedIn } }) => ({ ...profileStore, isLoggedIn })

const { onInputChange, update, getProfile } = ProfileAction
const mapdispatchtoprops = {
  update,
  getProfile,
  onInputChange,
  showError: SnackbarAction.show,
  onRouteChange: AppAction.onRouteChange
}
export default connect(mapStateToProps, mapdispatchtoprops)(Profile)
