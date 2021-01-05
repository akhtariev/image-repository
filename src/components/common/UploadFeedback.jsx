import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Backdrop, CircularProgress, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { resetFeedback } from '../../redux/actions/appActions';

// eslint-disable-next-line react/jsx-props-no-spreading
const Alert = props => <MuiAlert elevation={6} variant='filled' {...props} />;

const useStyles = makeStyles(theme => ({
  cp: {
    color: theme.palette.primary.dark,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const UploadFeedback = () => {
  const classes = useStyles();
  const appState = useSelector(state => state.app);
  const dispatch = useDispatch();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(resetFeedback());
  };

  return (
    <Grid item xs={12}>
      <Backdrop className={classes.backdrop} open={appState.isUploading}>
        <CircularProgress className={classes.cp} />
      </Backdrop>

      <Snackbar
        open={appState.succeeded}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity='success'>
          Uploaded images to the repository.
        </Alert>

      </Snackbar>

      <Snackbar
        open={appState.didInvalidate}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity='error'>
          Failed uploading.
        </Alert>
      </Snackbar>
    </Grid>
  );
};

export default UploadFeedback;
