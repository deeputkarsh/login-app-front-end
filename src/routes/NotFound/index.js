import React from 'react'
import { Grid, Paper } from '@material-ui/core'

import styles from 'Styles/index.scss'

export default _ => {
  return (
    <Grid container justify='center' spacing={3}>
      <Grid item xs={12}>
        <Paper className={styles.notFound}>404 NOT FOUND</Paper>
      </Grid>
    </Grid>
  )
}
