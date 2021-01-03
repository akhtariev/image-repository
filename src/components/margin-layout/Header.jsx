import React from 'react';
import { AppBar, Typography, Slide, Toolbar } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import PropTypes from 'prop-types';

const HideOnScroll = props => {
  const { children } = props;
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
};

const Header = () => (
  <HideOnScroll>
    <AppBar>
      <Toolbar>
        <Typography variant='h6'>Imaginary</Typography>
      </Toolbar>
    </AppBar>
  </HideOnScroll>
);

HideOnScroll.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
