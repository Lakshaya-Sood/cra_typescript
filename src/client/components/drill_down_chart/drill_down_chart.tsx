import React from 'react';

type DrillDownProps = {
  FirstComponent: React.ComponentType<any>,
  SecondComponent: React.ComponentType<any>,
  triggerFn: Function
};
class DrillDownChart extends React.Component<DrillDownProps> { 
  state = {
    drillDownFlag: false
  }
  toggleChart = () => {
    this.setState({drillDownFlag: !this.state.drillDownFlag})
  }
  onDrill = (node: any) => {
    console.log(node)
    this.setState({drillDownFlag: true})
  }
  render = () => { 
    let { drillDownFlag } = this.state;
    const { FirstComponent, SecondComponent } = this.props;
    return (
      <div id={'drill-down'} style={{'border':'1px solid black','padding':'10px'}}>
        <button onClick={()=>this.toggleChart()}> {drillDownFlag ? "Back" : "Drill Down"}</button>
        <div className={'drill-down-content'}>
          {drillDownFlag ? <SecondComponent /> : <FirstComponent/>}
        </div>
      </div>
    )
  }
} 

export default DrillDownChart