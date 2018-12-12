import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, NavLink } from "react-router-dom";

import MainContainer from './containers/main_container';

//to be checked imported
import DataGrid from './components/data_grid';
import GridConst from './constants/grid_constants';

class App extends React.Component { 
  render = () => (
    <Router>
      <div>
        <ul id="menu">
          <li>--<NavLink to="/home" activeClassName={"active-tab-menu"}>Home</NavLink>--</li>
          <li>--<NavLink to="/chart" activeClassName={"active-tab-menu"}>Chart</NavLink>--</li>
          <li>--<NavLink to="/dataGrid" activeClassName={"active-tab-menu"}>Data Grid</NavLink>--</li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/home" component={MainContainer} />
          <Route exact 
            path="/dataGrid" 
            render={() => (
              <DataGrid rows={GridConst.ROWS} columns={GridConst.COLUMNS} columnConfg={GridConst.COLUMN_CONFG}/>
              )} 
            />
          <Route exact path="/chart" component={MainContainer} />
          <Redirect to="/home"/>
        </Switch>
      </div>
    </Router>
  )
}

export default App;