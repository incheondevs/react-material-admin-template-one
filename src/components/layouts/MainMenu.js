import React from 'react';
import PropTypes from 'prop-types';
// Material-ui 컴포넌트들
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import TableIcon from '@material-ui/icons/TableChart';
import ChartIcon from '@material-ui/icons/ShowChart';
import PagesIcon from '@material-ui/icons/Pages';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
  mainmenu: {
    color: "#ffffff !important",
  }
});

class ResponsiveDrawer extends React.Component {
  render() {
    const { classes } = this.props;
    
    return (
      <div>
        <div className={ classes.toolbar }>
          {/* TODO 우리 로고! */}
        </div>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon><DashboardIcon className={ classes.mainmenu }/></ListItemIcon>
            <ListItemText><Typography className={ classes.mainmenu }>Dashboard</Typography></ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon><TableIcon className={ classes.mainmenu } /></ListItemIcon>
            <ListItemText><Typography className={ classes.mainmenu }>Tables</Typography></ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon><ChartIcon className={ classes.mainmenu } /></ListItemIcon>
            <ListItemText><Typography className={ classes.mainmenu }>Charts</Typography></ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon><PagesIcon className={ classes.mainmenu } /></ListItemIcon>
            <ListItemText><Typography className={ classes.mainmenu }>Pages</Typography></ListItemText>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon><SettingsIcon className={ classes.mainmenu } /></ListItemIcon>
            <ListItemText><Typography className={ classes.mainmenu }>Componets</Typography></ListItemText>
          </ListItem>
        </List>
      </div>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);