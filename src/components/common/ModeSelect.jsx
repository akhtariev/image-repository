import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { setMode } from '../../redux/actions/appActions';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    color: 'white',
  },
  select: {
    color: 'white',
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const appState = useSelector(state => state.app);
  const dispatch = useDispatch(state => state.app);

  const handleChange = event => {
    dispatch(setMode(event.target.value));
  };

  return (
    <FormControl variant='outlined' className={classes.formControl}>
      <Select
        value={appState.isPublicMode}
        onChange={handleChange}
        className={classes.select}
      >
        <MenuItem value>Public</MenuItem>
        <MenuItem value={false}>Private</MenuItem>
      </Select>
    </FormControl>
  );
}
