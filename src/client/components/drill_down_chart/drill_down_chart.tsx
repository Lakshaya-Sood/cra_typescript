import React from 'react';
import ChartOne from '../common/chart_one';
import ChartTwo from '../common/chart_two';
type DrillDownProps = {
  firstComponent: React.ComponentType<any>,
  secondComponent: React.ComponentType<any>
};
class DrillDownChart extends React.Component<DrillDownProps> { 
  state = {
    drillDownFlag: false
  }
  toggleChart = () => {
    this.setState({drillDownFlag: !this.state.drillDownFlag})
  }
  render = () => { 
    let { drillDownFlag } = this.state
    return (
      <div className={'drill-down'}>
      <button onClick={()=>this.toggleChart()}> {drillDownFlag ? "Back" : "Drill Down"}</button>
      {drillDownFlag ? <ChartTwo/> : <ChartOne />}
      </div>
    )
  }
} 

export default DrillDownChart