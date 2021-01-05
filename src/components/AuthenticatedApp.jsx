import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchAppBar from './margin-layout/SearchAppBar';
import UploadFeedback from './common/UploadFeedback';
import DisplayCard from './image/DisplayCard';
import ContainerGrid from './common/ContainerGrid';

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

  const images = [{
    name: 'Photo',
    downloadPath: 'https://firebasestorage.googleapis.com/v0/b/image-repository-c1030.appspot.com/o/Q3xHqjJy61TXgWIyBvvHepRnUJr2%2FScreenshot%20from%202020-12-17%2015-58-31.png?alt=media&token=57fc4fee-50a1-46b9-aa6d-6e2e7e93236c',
    isPublic: true,
    uploadedBy: 'Roman',
    tags: ['Hello', 'Hi'],
    timeAdded: 1609816955,
  }];

  return (
    <Grid container>
      <Grid item xs={12} className={classes.headerGrid}>
        <SearchAppBar />
      </Grid>

      {
      // eslint-disable-next-line no-unused-vars
      images.length > 0 && (
        images.map((image, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <ContainerGrid key={index} item xs={12} sm={6} md={4} lg={3} xl={2}>
            <DisplayCard image={image} />
          </ContainerGrid>
        )))
      }

      <UploadFeedback />
    </Grid>
  );
};

export default AuthenticatedApp;
