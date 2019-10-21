import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Grid, Paper } from '@material-ui/core'

import tabs from './tabs'
import { getRouteChangeEffect } from 'Utils'

import styles from 'Styles/index.scss'
import { AppAction } from 'Redux'

const LandingPage = (props) => {
  const { isLoggedIn } = props
  useEffect(() => { isLoggedIn || props.history.push('/') }, [isLoggedIn])
  useEffect(getRouteChangeEffect(props.history, props.onRouteChange))

  if (!isLoggedIn) {
    return null
  }

  return (
    <Grid container justify='center' className={styles.landingPageWrapper} spacing={3}>
      {tabs.map(item => renderTab(item, props.history.push))}
    </Grid>
  )
}

const renderTab = ({ name, path, key }, goToPath) => {
  return (
    <Grid item key={key} xs={12} sm={6} md={4} lg={3}>
      <Paper className={styles.landingPageItem} onClick={_ => goToPath(path)}>
        {name}
      </Paper>
    </Grid>
  )
}
const { onRouteChange } = AppAction
export default connect(({ appStore: { isLoggedIn } }) => ({ isLoggedIn }), { onRouteChange })(LandingPage)
