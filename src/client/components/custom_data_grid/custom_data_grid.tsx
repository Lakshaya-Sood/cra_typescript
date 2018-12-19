import * as React from "react";

import { Toolbar, Data } from "react-data-grid-addons";
import * as ReactDOM from "react-dom";
import ReactDataGrid from 'react-data-grid';
import _ from 'lodash';
import SimpleModal from '../../components/modal_popup/modal_popup';

const Selectors = Data.Selectors;

/**
 * Row interface
 */
interface Row {
    id: number;
    title: string;
    count: number;
}

/**
 * Column interface
 */
interface Column {
    key: keyof Row;
    name: string;
    filterable?: boolean;
    sortable?: boolean;
}

/**
 * State interface
 */
interface State {
    rows: Row[];
    columns: ReactDataGrid.Column<any>[],
    filters: any;
    sortColumn: string | null;
    sortDirection: string | null;
    open: boolean;
    modalData: object;
}

/**
 * Table component
 */
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


class CustomDataGrid extends React.Component<DataGridProps, State> {
   
    public state: State = {
        columns: _.cloneDeep(this.props.columns).map((item)=> {

            return {...item, ...this.props.columnConfg}
          }),
          rows: _.cloneDeep(this.props.rows),
        filters: {},
        sortColumn: null,
        sortDirection: null,
        open:false,
        modalData: {}
    };

    /**
     * Table class constructor
     * @param props
     * @param context
     */
    constructor(props: any, context: any) {
        super(props, context);
        this.handleGridSort = this.handleGridSort.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.onClearFilters = this.onClearFilters.bind(this);
        this.getRowData = this.getRowData.bind(this);
    }

    /**
     * Get the table rows as an array of Row objects
     * @returns {Row[]}
     */
    public getRows(): Row[] {
        return Selectors.getRows(this.state) as Row[];
    }

    /**
     * Get the amount of rows
     * @returns {number}
     */
    public getSize(): number {
        return this.getRows().length;
    }

    /**
     * Get a specific row
     * @param {number} i
     * @returns {Row}
     */
    public rowGetter(i: number): Row {
        const rows = this.getRows();
        return rows[i];
    }

    /**
     * Handle the filter change
     * @param filter
     */
    public handleFilterChange(filter: any): void {
        const newFilters = {...this.state.filters};
        if (filter.filterTerm) {
            newFilters[filter.column.key] = filter;
        } else {
            delete newFilters[filter.column.key];
        }

        this.setState({ filters: newFilters });
    }

    /**
     * Handle the table sorting
     * @param {string} sortColumn
     * @param {string} sortDirection
     */
    public handleGridSort(sortColumn: string, sortDirection: string): void {
        this.setState({ sortColumn: sortColumn, sortDirection: sortDirection });
    }

    public getRowData(rowIdx: number, row: object):void{
        console.log("Row index is" +rowIdx+" Row Data is"+row);
        this.setState({open:true,modalData:row});        
    }

    openModalPopup(){
        return (<SimpleModal modalData={this.state.modalData} open={this.state.open} />)
    }

    /**
     * Handles the clearing of the filters
     */
    public onClearFilters(): void {
        this.setState({ filters: {} });
    }

    /**
     * Render table
     * @returns {any}
     */
    public render(): any {
        // console.log(this);
        const { open } = this.state;
        return  (
            <div>
            {open?this.openModalPopup():
            <ReactDataGrid
                columns={this.state.columns}
                rowGetter={this.rowGetter.bind(this)}
                rowsCount={this.getSize()}
                minHeight={500}
                minWidth={1000}
                toolbar={<Toolbar enableFilter={true} />}
                enableCellSelect={true}
                onGridSort={this.handleGridSort}
                onAddFilter={this.handleFilterChange}
                onClearFilters={this.onClearFilters}
                onRowClick={this.getRowData}
            />}
            </div>
            );
        }
}
export default CustomDataGrid;

