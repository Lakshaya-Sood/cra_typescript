import React, { Component } from 'react';
import './app.css';
import DataGrid from '../../components/data_grid';
class App extends Component {
  render() {
    return (
      <div className="App">
        <DataGrid />
      </div>
    );
  }
}

export default App;
