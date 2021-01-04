import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../margin-layout/Header';
import LandingPageLayout from './LandingPageLayout';
import { auth, authObj } from '../../utils/firebase';

const backgroundImage = 'https://akhtariev.ca/img/cypress.jpg?auto=format&fit=crop&w=1400&q=80';

const useStyles = makeStyles(theme => ({
  headerGrid: theme.mixins.toolbar,
  cardMedia: {
    padding: 30,
    width: 300,
  },
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'center',
    height: '100vh',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
}));

const LandingPage = () => {
  const loginWithRedirect = () => {
    const provider = new authObj.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} className={classes.headerGrid}>
        <Header />
      </Grid>
      <Grid item xs={12} className={classes.headerGrid}>
        <LandingPageLayout backgroundClassName={classes.background}>
          {/* Increase the network loading priority of the background image. */}
          <img style={{ display: 'none' }} src={backgroundImage} alt='increase priority' />
          <Typography color='inherit' align='center' variant='h3' marked='center'>
            Your Image Repository
          </Typography>
          <Typography color='inherit' align='center' variant='h5' className={classes.h5}>
            Seamless storage
          </Typography>
          <Button
            color='primary'
            variant='contained'
            size='large'
            className={classes.button}
            component='a'
            onClick={loginWithRedirect}
          >
            Log In
          </Button>
          <Typography variant='body2' color='inherit' className={classes.more}>
            Manage your images
          </Typography>
        </LandingPageLayout>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
