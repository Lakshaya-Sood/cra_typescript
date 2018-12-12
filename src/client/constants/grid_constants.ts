import ReactDataGrid from 'react-data-grid';

import GridUtils from '../helper/grid_utils';

type ColumnConfg = {
    frozen?: boolean
    resizable?: boolean,
    width?: number
}

export default class GridConst {
    public static readonly COLUMNS: ReactDataGrid.Column<any>[] = [
        { key: 'case_id', name: 'Case ID', width: 120, sortable: true, },
        { key: 'summary', name: 'Summary', width: 270, sortable: true, },
        { key: 'risk_type', name: 'Risk Type', width: 120 },
        { key: 'created_at', name: 'Created At', width: 170 },
        { key: 'complete_by', name: 'Complete By', width: 170 },
        { key: 'assignee', name: 'Assignee', width: 150, sortable: true, }
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
