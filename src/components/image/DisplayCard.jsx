import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Chip } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 50,
    maxWidth: 345,
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

export default function DisplayCard() {
  const classes = useStyles();
  const [like, setLike] = React.useState(false);

  const handleLike = () => {
    setLike(!like);
  };

  const tags = ['Personal Computer', 'Hello', 'Another one', 'One more'];

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={(
          <Avatar aria-label='recipe' className={classes.avatar}>
            R
          </Avatar>
        )}
        action={(
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
        )}
        title='Shrimp and Chorizo Paella'
        subheader='September 14, 2016'
      />
      <CardMedia
        className={classes.media}
        image='/static/images/cards/paella.jpg'
        title='Paella dish'
      />
      <CardContent>
        {
        tags.map((tag, index) => (
          <Chip
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            label={tag}
            className={classes.chip}
          />
        ))
        }
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites' onClick={handleLike}>
          <FavoriteIcon color={like ? 'secondary' : 'inherit'} />
        </IconButton>
        <Typography>23</Typography>
        <IconButton aria-label='share'>
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
