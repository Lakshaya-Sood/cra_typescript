
import React, { MouseEventHandler } from 'react';
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { withStyles, createStyles, Theme, WithStyles } from '@material-ui/core/styles';


const drawerWidth = 240;

const styles = ( theme: Theme ) => createStyles({
  root: {
    display: 'flex',
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  }
});

interface Props extends WithStyles<typeof styles> {
  classes: any,
  open: boolean,
  handleDrawerOpen: MouseEventHandler<HTMLElement>,
  handleDrawerClose: MouseEventHandler<HTMLElement>,
  mainListItems: any,
  secondaryListItems: any,
}
export default withStyles(styles)(function ({ classes, open, handleDrawerOpen, handleDrawerClose, mainListItems, secondaryListItems }: Props) { 
  return (
    <div className={classes.root}>
    <CssBaseline />
    <Drawer
      variant="permanent"
      classes={{
        paper: classNames(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>{mainListItems}</List>
      <Divider />
      <List>{secondaryListItems}</List>
      <div className={classes.toolbarIcon}>
      <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={handleDrawerOpen}
          className={classNames(
            open && classes.menuButtonHidden,
          )}
        >
          <MenuIcon />
        </IconButton>
        </div>
    </Drawer>
  </div>
  )
})


// MainContainer.propTypes = {
//   classes: PropTypes.object.isRequired,
// };