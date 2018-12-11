import React from 'react';
import MainView from '../../components/main_view';

class MainContainer extends React.Component { 
  render = () => (<MainView {...this.props}/> )
}
export default MainContainer;