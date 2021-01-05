import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { Checkbox, ListItemIcon } from '@material-ui/core';
import ContainerGrid from '../common/ContainerGrid';
import { functions, storage } from '../../utils/firebase';
import { invalidateUpload, toggleUpload, succeedUpload, loadImages } from '../../redux/actions/appActions';

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
    marginBottom: 30,
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  btn: {
    marginBottom: 30,
  },
}));

// eslint-disable-next-line react/jsx-props-no-spreading
const Transition = React.forwardRef((props, ref) => <Slide direction='up' ref={ref} {...props} />);

export default function UploadDialog() {
  const classes = useStyles();
  const userState = useSelector(state => state.user);
  const [open, setOpen] = React.useState(false);
  const [files, setFiles] = React.useState([]);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpload = async () => {
    dispatch(toggleUpload());

    if (files.length > 0) {
      try {
        handleClose();
        const storageRef = storage.ref();
        const storageUploadResult = await Promise.all(files.map(async file => {
          const storageLocation = `${userState.auth.uid}/${file.data.name}`;
          const fileRef = storageRef.child(storageLocation);
          await fileRef.put(file.data);
          return {
            downloadURL: await fileRef.getDownloadURL(),
            isPublic: file.isPublic,
            name: file.data.name,
            uploadPath: fileRef.fullPath,
          };
        }));
        const saveImages = functions.httpsCallable('saveImages');
        await saveImages(storageUploadResult);
        await loadImages(dispatch, userState.auth.uid);
        dispatch(succeedUpload());
      } catch (error) {
        dispatch(invalidateUpload());
      }
    }
  };

  const onImageChange = event => {
    if (event.target.files) {
      const filesToUpload = [];
      // eslint-disable-next-line no-restricted-syntax
      for (const file of event.target.files) {
        filesToUpload.push({ data: file, isPublic: false });
      }
      setFiles([...files, ...filesToUpload]);
    }
  };

  const checkImage = index => {
    const newFiles = [...files];
    newFiles[index].isPublic = !files[index].isPublic;
    setFiles(newFiles);
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
              className={classes.btn}
            >
              Add Images
              <input type='file' multiple hidden onChange={e => onImageChange(e)} />
            </Button>
          </ContainerGrid>
          {files.length > 0 && (
            <ContainerGrid xs={12}>
              <ContainerGrid xs={12}>
                <Typography>
                  Check the box for public images
                </Typography>
              </ContainerGrid>
              <ContainerGrid xs={12}>
                <List>
                  {
            // eslint-disable-next-line no-unused-vars
            files.map((file, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <ListItem key={index}>
                <ListItemIcon>
                  <Checkbox
                    edge='start'
                    tabIndex={-1}
                    disableRipple
                    onChange={() => checkImage(index)}
                  />
                </ListItemIcon>
                <ListItemText primary={file.data.name} secondary={`Size: ${file.data.size}`} />
              </ListItem>
            ))
            }
                </List>

              </ContainerGrid>
            </ContainerGrid>

          )}
        </Grid>

      </Dialog>
    </div>
  );
}
