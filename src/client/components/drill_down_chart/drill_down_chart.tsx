import React from 'react';

type DrillDownProps = {
  FirstComponent: React.ComponentType<any>,
  SecondComponent: React.ComponentType<any>
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
      <div className={'drill-down'}>
      <button onClick={()=>this.toggleChart()}> {drillDownFlag ? "Back" : "Drill Down"}</button>
        {drillDownFlag ? <SecondComponent /> : <FirstComponent onClick={(node: any) => this.onDrill(node)}/>}
      </div>
    )
  }
} 

export default DrillDownChart