import React from 'react';
import {PieChart, Pie, Legend, ResponsiveContainer,Cell, Tooltip} from 'recharts';
const colors = ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"];

const data = [
                {name: 'A1', value: 100},
                {name: 'A2', value: 300},
                {name: 'B1', value: 100},
                {name: 'B2', value: 80},
                {name: 'B3', value: 40},
                {name: 'B4', value: 30},
                {name: 'B5', value: 50},
                {name: 'C1', value: 100},
                {name: 'C2', value: 200},
                {name: 'D1', value: 150},
                {name: 'D2', value: 50},
                {name: 'E1', value: 100},
                {name: 'E2', value: 100},
                {name: 'F1', value: 40},
                {name: 'F2', value: 30},
                {name: 'F3', value: 200},
                {name: 'G1', value: 150},
                {name: 'G2', value: 40}
            ]

class RechartTwo extends React.Component {
    render = () => {
        return(
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                    data={data}
                    dataKey={'value'}
                    innerRadius={55}
                    outerRadius={100}
                    label>
                    {
                        data.map((entry, index) => 
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]}/>)
                    }
                    </Pie>
                    <Tooltip/>
                </PieChart>
            </ResponsiveContainer>)
    }
}

export default RechartTwo;