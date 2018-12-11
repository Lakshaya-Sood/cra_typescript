
import React from 'react';
import DataGrid from '../data_grid';

import { columns, rows }  from '../../constants/grid_constants';
export default () => { 
  return (
    <div className="App">
      <DataGrid rows={rows} columns={columns}/> 
    </div>
  )
}

