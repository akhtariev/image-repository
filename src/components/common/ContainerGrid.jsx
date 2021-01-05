import React from 'react';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';

const ContainerGrid = props => {
  const { children, xs, xl, sm, md, lg } = props;
  return (
    <Grid
      item
      xs={xs}
      xl={xl}
      sm={sm}
      md={md}
      lg={lg}
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

ContainerGrid.defaultProps = {
  xl: false,
  sm: false,
  md: false,
  lg: false,
};

ContainerGrid.propTypes = {
  xs: PropTypes.number.isRequired,
  xl: PropTypes.PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ]),
  sm: PropTypes.PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ]),
  md: PropTypes.PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ]),
  lg: PropTypes.PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ContainerGrid;
