import * as React from "react";

import { Toolbar, Data } from "react-data-grid-addons";
import * as ReactDOM from "react-dom";
import ReactDataGrid from 'react-data-grid';
import _ from 'lodash';

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
    rows: Row[] | null;
    filters: any;
    sortColumn: string | null;
    sortDirection: string | null;
}

/**
 * Table component
 */
class CustomDataGrid extends React.Component<{}, State> {
    private columns: Column[];
    private rows: Row[];

    public state: State = {
        rows: null,
        filters: {},
        sortColumn: null,
        sortDirection: null,
    };

    /**
     * Table class constructor
     * @param props
     * @param context
     */
    constructor(props: any, context: any) {
        super(props, context);
        this.columns = [
            { key: "id", name: "ID", filterable: true, sortable: true },
            { key: "title", name: "Title", filterable: true, sortable: true },
            { key: "count", name: "Count", filterable: true, sortable: true },
        ];
        this.rows = this.createRows();

        this.state.rows = this.rows;

        this.handleGridSort = this.handleGridSort.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.onClearFilters = this.onClearFilters.bind(this);
    }

    /**
     * Create the table rows
     * @returns {Row[]}
     */
    public createRows(): Row[]  {
        const rows = [];
        for (let i = 1; i < 1000; i++) {
            rows.push({
                id: i,
                title: "Title " + i,
                count: i * 1000,
            });
        }
        return rows;
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
        return  (
            <ReactDataGrid
                columns={this.columns}
                rowGetter={this.rowGetter.bind(this)}
                rowsCount={this.getSize()}
                minHeight={500}
                toolbar={<Toolbar enableFilter={true} />}
                enableCellSelect={true}
                onGridSort={this.handleGridSort}
                onAddFilter={this.handleFilterChange}
                onClearFilters={this.onClearFilters}
            />);
    }
}
export default CustomDataGrid;

