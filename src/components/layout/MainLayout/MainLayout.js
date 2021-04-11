import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import PageNav from '../PageNav/PageNav';
import Toolbar from '@material-ui/core/Toolbar';

const MainLayout = ({children}) => (
  <div className="MainLayout">
    <AppBar>

      <Container maxWidth='lg'>
        <Toolbar disableGutters>
          <PageNav />
        </Toolbar>
      </Container>

    </AppBar>

    <Container maxWidth='lg'>
      <Toolbar />
      {children}
    </Container>

  </div>

);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
