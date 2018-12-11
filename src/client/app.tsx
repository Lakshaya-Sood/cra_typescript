import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

import MainContainer from './containers/main_container';

class App extends React.Component { 
  render = () => (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/home" component={MainContainer} />
          <Redirect to="/home"/>
        </Switch>
      </div>
    </Router>
  )
}

export default App;