import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer,Cell} from 'recharts';
const colors = ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"];
const data = [
      {name: 'A', amt: 2400},
      {name: 'B', amt: 2210},
      {name: 'C', amt: 2290},
      {name: 'D', amt: 2000},
      {name: 'E', amt: 2181},
      {name: 'F', amt: 2500},
      {name: 'G', amt: 2100},
];
class RechartOne extends React.Component {
    render = () => {
        return(
            <ResponsiveContainer>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend />
                    <Bar dataKey="amt" onClick={(x)=>{console.log(x)}}>
                        {
                            data.map((entry, index) => (
                                <Cell
                                key={`cell-${index}`} 
                                fill={colors[index % 20]}
                                />
                            ))
                        }
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
            )
    }
}

export default RechartOne;