import React from 'react';

import MainView from '../../components/main_view';
import { mainListItems, secondaryListItems } from './listItems';

class MainContainer extends React.Component {
  state = {
    open: false,
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  }

  handleDrawerClose = () => {
    this.setState({ open: false });
  }
  
  render(){
    let { open } = this.state;
    return (
    <React.Fragment>
      <MainView 
        open={open} 
        handleDrawerOpen={this.handleDrawerOpen} 
        handleDrawerClose={this.handleDrawerClose}
        mainListItems={mainListItems}
        secondaryListItems={secondaryListItems}
      />
    </React.Fragment>)
  }
}
export default MainContainer;
