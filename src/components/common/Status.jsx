import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Grid, CircularProgress } from '@material-ui/core';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { makeStyles } from '@material-ui/core/styles';
import ContainerGrid from './ContainerGrid';

const useStyles = makeStyles(theme => ({
  text: {
    marginTop: 40,
    color: theme.palette.primary.dark,
  },
  icon: {
    color: theme.palette.primary.dark,
    fontSize: 100,
  },
  cp: {
    color: theme.palette.primary.dark,
  },
}));

const Status = props => {
  const { message, loading, error } = props;
  const classes = useStyles();

  return (
    <Grid
      container
      alignItems='center'
      justify='center'
      direction='column'
      style={{ minHeight: '100vh' }}
    >
      <ContainerGrid
        xs={12}
      >
        {loading && (
        <ContainerGrid xs={12}>
          <CircularProgress size={100} className={classes.cp} />
        </ContainerGrid>
        )}
        {error && (
        <ContainerGrid xs={12}>
          <ErrorOutlineIcon className={classes.icon} />
        </ContainerGrid>
        )}
        <ContainerGrid xs={12}>
          <Typography variant='h5' className={classes.text}>
            {message}
          </Typography>
        </ContainerGrid>
      </ContainerGrid>
    </Grid>

  );
};

Status.propTypes = {
  message: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  loading: PropTypes.bool,
  // eslint-disable-next-line react/require-default-props
  error: PropTypes.bool,
};

export default Status;
