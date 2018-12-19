import React from 'react';
import {BarChart,Label, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer,Cell} from 'recharts';
const colors = ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"];
type dataProps = {
      data:Array<object>,
      handleDrill:any
}

const RechartOne = ({data, handleDrill} :dataProps) =>(
    <ResponsiveContainer>
                
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3"/>
                  
                    <XAxis dataKey="flavour">
    <Label value="Flavours" offset={0} position="insideBottom" />
  </XAxis>
                    <YAxis label={{ value: 'Amount', angle: -90, position: 'insideLeft' }}/>
                    <Tooltip/>
                  
                    <Bar dataKey="amount" onClick={handleDrill}>
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
);
// class RechartOne1 extends React.Component {
//     handleClick(x:any){
        
//     }
//     render = () => {
//         const renderLegend = (props:any) => {
//             const { payload } = props;
          
//             return (
//               null
//             );
//           }
//         return(
//             <ResponsiveContainer>
                
//                 <BarChart data={data}>
//                     <CartesianGrid strokeDasharray="3 3"/>
                  
//                     <XAxis dataKey="flavour">
//     <Label value="Flavours" offset={0} position="insideBottom" />
//   </XAxis>
//                     <YAxis label={{ value: 'Amount', angle: -90, position: 'insideLeft' }}/>
//                     <Tooltip/>
//                     <Legend content={renderLegend} verticalAlign="top" height={36}/>
//                     <Bar dataKey="amount" onClick={this.handleClick.bind(this)}>
//                         {
//                             data.map((entry, index) => (
//                                 <Cell
//                                 key={`cell-${index}`} 
//                                 fill={colors[index % 20]}
//                                 />
//                             ))
//                         }
//                     </Bar>
//                 </BarChart>
//             </ResponsiveContainer>

            
//             )
//     }
// }

export default RechartOne;