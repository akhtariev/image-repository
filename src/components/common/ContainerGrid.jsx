import React from 'react';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';

const ContainerGrid = props => {
  const { children, xs } = props;
  return (
    <Grid
      item
      xs={xs}
    >
      <Grid
        container
        alignItems='center'
        justify='center'
      >
        {children}
      </Grid>
    </Grid>
  );
};

ContainerGrid.propTypes = {
  xs: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ContainerGrid;
