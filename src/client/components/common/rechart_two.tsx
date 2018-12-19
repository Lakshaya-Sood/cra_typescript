import React from 'react';
import {PieChart, Pie, Label, ResponsiveContainer,Cell, Tooltip} from 'recharts';
const colors = ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"];

type dataProps ={
    data : Array<Object>
}

const RechartTwo = ({data}:dataProps) =>(
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
                    <Label value="Quaterly Sales" offset={10} position="outside" />
                    </Pie>
                    
                    <Tooltip/>
                </PieChart>
            </ResponsiveContainer>
)

export default RechartTwo;