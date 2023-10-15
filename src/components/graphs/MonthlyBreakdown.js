import React from 'react'
import { Pie, PieChart, ResponsiveContainer, Cell, Tooltip, Legend } from 'recharts'

const renderLegend = (props) => {
    const { payload } = props;
  
    return (
      <ul className='pieLegend'>
        {payload.map((entry, index) => (
          <li key={`item-${index}`}>{entry.value}</li>
        ))}
      </ul>
    );
  };

  const divStyle = {
    background_color: 'blue',
    display: 'flex',
    height: '50%',
    width: '50%'
  }; 

  
const MonthlyBreakdown = (props) => {
    return (
        <ResponsiveContainer className="pieChartWrapper" width="100%" height="100%">
            <PieChart width={400} height={400}>
                <Tooltip />
                <Legend wrapperStyle={divStyle} layout="vertical" verticalAlign="middle" align="right" />
                <Pie data={props.data} dataKey="val" innerRadius={'60%'}>
                    {props.data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={props.data[index].color} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    )
}

export default MonthlyBreakdown