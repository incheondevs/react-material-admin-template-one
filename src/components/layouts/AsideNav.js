import React from 'react';
import PropTypes from 'prop-types';
// Material-ui 컴포넌트들
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { withStyles } from '@material-ui/core/styles';
// others
import MainMenu from './MainMenu.js';

const drawerWidth = 240; // 메뉴 Drawer 가로크기
const styles = theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
    background: "#304ffe",
  },
});

const Layouts = props => {
  const { classes, theme } = props;
  
  return (
    <nav className={ classes.drawer }>
      <Hidden smUp implementation="css">
        <Drawer
          container={ props.container }
          variant="temporary"
          anchor={ theme.direction === 'rtl' ? 'right' : 'left' }
          open={ props.mobileOpen }
          onClose={ props.onDrawerToggle }
          classes={ {paper: classes.drawerPaper} }
        >
          <MainMenu />
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={ {paper: classes.drawerPaper} }
          variant="permanent"
          open
        >
          <MainMenu />
        </Drawer>
      </Hidden>
    </nav>
  );
}

Layouts.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  // container: PropTypes.object,
};

export default withStyles(styles, { withTheme: true })(Layouts);
