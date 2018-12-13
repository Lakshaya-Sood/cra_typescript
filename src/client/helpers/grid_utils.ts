
export default class GridUtils {
    public static readonly getNewDateStr = () => {
        let date = new Date;
        return ( `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}   ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
    }
    public static readonly sortRows = ( rows: any[], sortColumn: string, sortDirection: string) => (rows: any[]) => {
        const comparer = ( a: any, b: any ) => {  
            if ( sortDirection === "ASC" ) {
                return a[sortColumn] > b[sortColumn] ? 1 : -1;
            } else if ( sortDirection === "DESC" ) {
                return a[sortColumn] < b[sortColumn] ? 1 : -1;
            } else {
                return 1;
            }
        };
        return sortDirection === "NONE" ? rows : [...rows].sort( comparer );
      }
}