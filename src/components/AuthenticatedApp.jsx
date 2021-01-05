import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchAppBar from './margin-layout/SearchAppBar';
import UploadFeedback from './common/UploadFeedback';
import DisplayCard from './image/DisplayCard';
import ContainerGrid from './common/ContainerGrid';
import Status from './common/Status';
import { loadImages } from '../redux/actions/appActions';

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
  const [isLoadingImages, setIsLoadingImages] = useState(false);
  const appState = useSelector(state => state.app);
  const userState = useSelector(state => state.user);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    const getImages = async () => {
      setIsLoadingImages(true);
      await loadImages(dispatch, userState.auth.uid);
      setIsLoadingImages(false);
    };

    getImages();
  }, [dispatch, userState]);

  if (isLoadingImages) {
    return <Status message='Loading images...' loading />;
  }

  let imagesToShow = appState.isPublicMode ? appState.publicImages : appState.privateImages;
  if (appState.filter !== null) {
    imagesToShow = imagesToShow.filter(image => {
      // eslint-disable-next-line no-restricted-syntax
      for (const tag of image.tags) {
        if (JSON.stringify(tag.description).toLowerCase().includes(appState.filter.toLowerCase())) {
          return true;
        }
      }
      return false;
    });
  }

  return (
    <Grid container>
      <Grid item xs={12} className={classes.headerGrid}>
        <SearchAppBar />
      </Grid>

      {
        imagesToShow.map((image, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <ContainerGrid key={index} item xs={12} sm={12} md={12} lg={6} xl={4}>
            <DisplayCard image={image} />
          </ContainerGrid>
        ))
      }

      <UploadFeedback />
    </Grid>
  );
};

export default AuthenticatedApp;
