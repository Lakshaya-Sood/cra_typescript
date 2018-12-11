import React from 'react';
import ReactDataGrid from 'react-data-grid';
interface DataGridPropsItfc { 
  rows: any[],
  columns: ReactDataGrid.Column<any>[]
} 

class DataGrid extends React.Component<DataGridPropsItfc> {
  state = {

  }
  onGridRowsUpdated = () => { }
  render = () => { 
    return(
      <div>
        <ReactDataGrid
          columns={this.props.columns}
          rowGetter={i => this.props.rows[i]}
          onGridRowsUpdated={this.onGridRowsUpdated}
          enableCellSelect={true}
          rowsCount={2}
          minHeight={150}
        />
      </div>
    )
  }
}

export default DataGrid;

/*


*/
