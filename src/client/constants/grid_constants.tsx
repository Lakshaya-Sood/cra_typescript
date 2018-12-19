
import * as React from "react";
import ReactDataGrid from 'react-data-grid';
import { NavLink } from "react-router-dom";
import GridUtils from '../helpers/grid_utils';
import { string } from 'prop-types';
import { render } from 'react-dom';

type ColumnConfg = {
    frozen?: boolean
    resizable?: boolean,
    width?: number
}

const formatterTemplate: React.FunctionComponent<{ value: string }> = ({ children, value }) => (
    <a href=""> {value} </a>
);
 
export default class GridConst {
    /**
     * name
     */
    
    
    public static readonly COLUMNS: ReactDataGrid.Column<any>[] = [
        { key: 'case_id', name: 'Case ID', formatter:formatterTemplate, width: 300, sortable: true,filterable: true },
        { key: 'summary', name: 'Summary', width: 270, sortable: true, filterable: true},
        { key: 'risk_type', name: 'Risk Type', width: 120, sortable: true,filterable: true },
        { key: 'created_at', name: 'Created At', width: 200 , sortable: true,filterable: true},
        { key: 'complete_by', name: 'Complete By', width: 170 , sortable: true,filterable: true },
        { key: 'assignee', name: 'Assignee', width: 150, sortable: true, filterable: true }
    ];
    public static readonly ROWS: any[] = [
        {
            case_id: 10221210, 
            summary: 'Tuna fish not healthy to eat',
            risk_type:'Type XYZ',
            created_at: GridUtils.getNewDateStr(), 
            complete_by: GridUtils.getNewDateStr(),
            assignee: 'HoQA Name'
        },
        {
            case_id: 11221311, 
            summary: 'Quaker Oats - Wrong Weight',
            risk_type:'Type ABC',
            created_at: GridUtils.getNewDateStr(), 
            complete_by: GridUtils.getNewDateStr(),
            assignee: 'QADirector Name'
        }
    ];
    public static readonly COLUMN_CONFG: ColumnConfg = {
        resizable: true
      }
 }
