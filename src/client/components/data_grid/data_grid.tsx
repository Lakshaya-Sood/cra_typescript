import React from 'react';
import ReactDataGrid from 'react-data-grid';
import _ from 'lodash';

import GridUtils from '../../helper/grid_utils';
type ColumnConfg = {
  frozen?: boolean
  resizable?: boolean,
  width?: number,
}

type DataGridProps = { 
  rows: any[],
  columns: ReactDataGrid.Column<any>[],
  columnConfg?: ColumnConfg
} 

class DataGrid extends React.Component<DataGridProps> {
  state = {
    columns: _.cloneDeep(this.props.columns).map((item)=> {
      return {...item, ...this.props.columnConfg}
    }),
    rows: _.cloneDeep(this.props.rows)
  }
  onGridRowsUpdated = () => { }
  componentWillMount = () => {
    console.log(this.state)
  }
  render = () => { 
    return(
      <div>
        <ReactDataGrid
          columns={this.state.columns}
          rowGetter={i => this.state.rows[i]}
          onGridRowsUpdated={this.onGridRowsUpdated}
          enableCellSelect={true}
          rowsCount={2}
          minHeight={150}
          onColumnResize={(idx, width) =>
            console.log(`Column ${idx} has been resized to ${width}`)
          }
          onGridSort={(sortColumn, sortDirection) => {
            console.log('heelo')  
            GridUtils.sortRows(_.cloneDeep(this.state.rows), sortColumn, sortDirection)}
          }
        />
      </div>
    )
  }
}

export default DataGrid;

