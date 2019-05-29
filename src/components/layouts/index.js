import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from "react-router-dom";
// Material-ui 컴포넌트들
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
// others
import Header from './Header.js';
import AsideNav from './AsideNav.js';
import HomePage from '../pages/Home.js';
import IconsPage from '../pages/Icons.js';

const styles = theme => ({
  root: { display: 'flex' },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

const Layouts = props => {
  const { classes } = props;
  
  return (
    <div className={ classes.root }>
      <CssBaseline />
      <Header onDrawerToggle={ props.onDrawerToggle } />
      <AsideNav 
        mobileOpen={ props.mobileOpen }
        onDrawerToggle={ props.onDrawerToggle }
      />

      <main className={ classes.content }>
        <div className={ classes.toolbar } />
        <Switch>
          <Route exact path="/" component={ HomePage } />
          <Route exact path="/icons" component={ IconsPage } />
        </Switch>
      </main>
    </div>
  );
}

Layouts.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  // container: PropTypes.object,
};

export default withStyles(styles, { withTheme: true })(Layouts);
