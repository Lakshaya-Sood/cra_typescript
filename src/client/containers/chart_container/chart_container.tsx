import React from 'react';
import RechartOne from '../../components/common/rechart_one';
import RechartTwo from '../../components/common/rechart_two';
import ChartView from '../../components/chart_view/chart_view';
import { isRegExp } from 'util';


class ChartContainer extends React.Component {
    state = {
        drillDownFlag: false,
        firstChartData:  [
            {flavour: 'Apple', amount: 120},
            {flavour: 'Banana', amount: 60},
            {flavour: 'Orange', amount: 50},
            {flavour: 'Grapes', amount: 50},
            {flavour: 'Mango', amount: 200},
        ],
        data:[
            {flavour: 'Apple', amount: 120},
            {flavour: 'Banana', amount: 60},
            {flavour: 'Orange', amount: 50},
            {flavour: 'Grapes', amount: 50},
            {flavour: 'Mango', amount: 200},
        ],
        secondChartData: {
            'Apple':[
                {name: 'Q1', value: 20},
            {name: 'Q2', value: 15},
            {name: 'Q3', value: 25},
            {name: 'Q4', value:60}
            ],
            'Banana':[
                {name: 'Q1', value: 15},
            {name: 'Q2', value: 7},
            {name: 'Q3', value: 12},
            {name: 'Q4', value:26}
            ],
            'Orange':[
                {name: 'Q1', value: 8},
                {name: 'Q2', value: 7},
                {name: 'Q3', value: 15},
                {name: 'Q4', value:20}
            ],
            'Grapes':[
                {name: 'Q1', value: 9},
                {name: 'Q2', value: 16},
                {name: 'Q3', value: 17},
                {name: 'Q4', value:8}
            ],
            'Mango':[
                {name: 'Q1', value: 26},
            {name: 'Q2', value: 39},
            {name: 'Q3', value: 125},
            {name: 'Q4', value:10}
            ]
        }

    
    }
    toggleChart = (x:any) => {
        const flavour:string = x.flavour;
        const detailedData:any = this.state.secondChartData;
        this.setState({ drillDownFlag: !this.state.drillDownFlag });
        if(!this.state.drillDownFlag){
            this.setState({data: detailedData[flavour]});
        }
        else{
            this.setState({data: this.state.firstChartData});
        }
    }

    render = () => {
        let drillDownFlag:boolean  = this.state.drillDownFlag;
        return (
            <ChartView data={this.state.data} FirstComponent={RechartOne} SecondComponent={RechartTwo} drillDownFlag={drillDownFlag} handleDrill={this.toggleChart.bind(this)}></ChartView>
        )
    }
}

export default ChartContainer