import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, NavLink } from "react-router-dom";

import MainContainer from './containers/main_container';

//to be checked imported
import DataGrid from './components/data_grid';
import CustomDataGrid from './components/custom_data_grid';
import DrilDownChart from './components/drill_down_chart';
import GridConst from './constants/grid_constants';
import RechartOne from './components/common/rechart_one';
import RechartTwo from './components/common/rechart_two';

class App extends React.Component { 
  render = () => (
    <Router>
      <div>
        <ul id="menu">
          <li>--<NavLink to="/home" activeClassName={"active-tab-menu"}>Home</NavLink>--</li>
          <li>--<NavLink to="/recharts" activeClassName={"active-tab-menu"}>ReCharts</NavLink>--</li>
          <li>--<NavLink to="/dataGrid" activeClassName={"active-tab-menu"}>Data Grid</NavLink>--</li>
          <li>--<NavLink to="/customdatagrid" activeClassName={"active-tab-menu"}>Custom Data Grid</NavLink>--</li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/home" component={MainContainer} />
          <Route exact 
            path="/dataGrid" 
            render={() => (
              <DataGrid  ref='myGrid' rows={GridConst.ROWS} columns={GridConst.COLUMNS} columnConfg={GridConst.COLUMN_CONFG}/>
              )} 
            />
          <Route exact 
            path="/customdatagrid" 
            render={() => (
              <CustomDataGrid  ref='customdataGridRef' rows={GridConst.ROWS} columns={GridConst.COLUMNS} columnConfg={GridConst.COLUMN_CONFG} />
              )} 
            />
          />
          <Route exact 
            path="/recharts" 
            render={() => (
              <DrilDownChart FirstComponent={RechartOne} SecondComponent={RechartTwo} triggerFn={()=>{}}></DrilDownChart>
              )} 
          />
          <Redirect to="/home"/>
        </Switch>
      </div>
    </Router>
  )
}

export default App;