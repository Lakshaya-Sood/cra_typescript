import React from 'react';
import ChartOne from '../common/chart_one';
import ChartTwo from '../common/chart_two';
type DrillDownProps = {
  firstComponent: React.ComponentType<any>,
  secondComponent: React.ComponentType<any>
};
const drillDownFlag = {t :false}
class DrillDownChart extends React.Component<DrillDownProps> { 
  
  toggleChart = () => {
    console.log("hellos")
    drillDownFlag.t = !drillDownFlag.t
    console.log(drillDownFlag)
  }
  render = () => { 
    console.log(drillDownFlag.t)
    return (
      <div className={'drill-down'}>
      <button onClick={this.toggleChart}> {drillDownFlag.t? "Back" : "Drill Down"}</button>
      {drillDownFlag.t ? <ChartTwo/> : <ChartOne />}
      </div>
    )
  }
} 

export default DrillDownChart