import React from 'react';
import RechartOne from '../common/rechart_one';
import RechartTwo from '../common/rechart_two';
type DrillDownProps = {
    data:Array<Object>,
  FirstComponent: React.ComponentType<any>,
  SecondComponent: React.ComponentType<any>,
  drillDownFlag:any
  handleDrill: any
};
const colors = ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"];

export const ChartView = ({ data,FirstComponent, SecondComponent,drillDownFlag, handleDrill}: DrillDownProps) => (
<div id={'drill-down'} style={{'border':'1px solid black','padding':'10px'}}>
       
      
{drillDownFlag ? <button onClick={handleDrill}>{"Back"}</button> : ""}
      
        <div className={'drill-down-content'}>
         {drillDownFlag ? <SecondComponent data={data} /> : <FirstComponent data={data} handleDrill={handleDrill}/>}
        </div>
      </div>
)



export default ChartView