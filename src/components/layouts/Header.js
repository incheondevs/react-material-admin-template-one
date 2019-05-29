import React from 'react';
import PropTypes from 'prop-types';
// Material-ui 컴포넌트들
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const drawerWidth = 240; // 메뉴 Drawer 가로크기
const styles = theme => ({
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
});

const Header = props => {
  const { classes } = props;

  return (
    <AppBar position="fixed" className={ classes.appBar } color="default">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={ props.onDrawerToggle }
          className={ classes.menuButton }
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" noWrap>
          사이트 관리자
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);