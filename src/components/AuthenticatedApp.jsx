import React from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchAppBar from './margin-layout/SearchAppBar';

const useStyles = makeStyles(theme => ({
  headerGrid: theme.mixins.toolbar,
  paper: {
    marginTop: 10,
    marginLeft: 75,
    marginRight: 75,
    padding: 10,
  },
  bottomPaper: {
    marginTop: 10,
    marginLeft: 75,
    marginRight: 75,
    padding: 10,
    marginBottom: 20,
  },
}));

const AuthenticatedApp = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} className={classes.headerGrid}>
        <SearchAppBar />
      </Grid>
      <Grid item xs={12}>
        <Box className={classes.paper}>
          <Typography h3>Authenticated</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AuthenticatedApp;
