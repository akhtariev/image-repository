import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import PublishIcon from '@material-ui/icons/Publish';
import Grid from '@material-ui/core/Grid';
import ContainerGrid from '../common/ContainerGrid';
import Status from '../common/Status';

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
    marginBottom: 30,
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

// eslint-disable-next-line react/jsx-props-no-spreading
const Transition = React.forwardRef((props, ref) => <Slide direction='up' ref={ref} {...props} />);

export default function UploadDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [files, setFiles] = React.useState([]);
  const [isUploading, setIsUploading] = React.useState(false);

  if (isUploading) {
    return <Status message='Authenticating...' loading />;
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setIsUploading(false);
    setOpen(false);
  };

  const handleUpload = () => {
    setIsUploading(true);

    handleClose();
  };

  const onImageChange = event => {
    if (event.target.files) {
      const filesToUpload = [];
      // eslint-disable-next-line no-restricted-syntax
      for (const file of event.target.files) {
        filesToUpload.push(file);
      }
      setFiles([...files, ...filesToUpload]);
    }
  };

  return (
    <div>
      <IconButton
        edge='start'
        className={classes.menuButton}
        color='inherit'
        aria-label='open drawer'
        component='label'
        onClick={() => handleClickOpen()}
      >
        <PublishIcon />
      </IconButton>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge='start' color='inherit' onClick={handleClose} aria-label='close'>
              <CloseIcon />
            </IconButton>
            <Typography variant='h6' className={classes.title}>
              Select Images To Upload
            </Typography>
            <Button autoFocus color='inherit' onClick={handleUpload}>
              Upload
            </Button>
          </Toolbar>
        </AppBar>
        <Grid container>
          <ContainerGrid xs={12}>
            <Button
              variant='contained'
              component='label'
            >
              Add Images
              <input type='file' multiple hidden onChange={e => onImageChange(e)} />
            </Button>
          </ContainerGrid>
          <ContainerGrid xs={12}>
            <List>
              {
            // eslint-disable-next-line no-unused-vars
            files.map(file => (
              <ListItem>
                <ListItemText primary={file.name} secondary={`Size: ${file.size}`} />
              </ListItem>
            ))
            }
            </List>

          </ContainerGrid>
        </Grid>

      </Dialog>
    </div>
  );
}
