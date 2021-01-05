import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Chip } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 50,
    minWidth: 350,
    maxWidth: 600,
    minHeight: 600,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

export default function DisplayCard(props) {
  const { image } = props;
  const { name, downloadURL, isPublic, tags, timeAdded, fullUploaderName } = image;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={(
          <Avatar aria-label='recipe' className={classes.avatar}>
            {fullUploaderName.substr(0, 1).toUpperCase()}
          </Avatar>
        )}
        title={fullUploaderName}
        subheader={`${name} - ${new Date(timeAdded * 1000).toLocaleDateString()} - ${isPublic ? 'Public' : 'Private'}`}
      />
      <CardMedia
        className={classes.media}
        image={downloadURL}
        title='Paella dish'
      />
      <CardContent>
        {
        tags.map((tag, index) => (
          <Chip
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            label={tag.description}
            className={classes.chip}
          />
        ))
        }
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='share'>
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

DisplayCard.propTypes = {
  image: PropTypes.object.isRequired,
};
