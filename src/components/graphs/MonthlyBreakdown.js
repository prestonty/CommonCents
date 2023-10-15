import React from 'react'
import { Pie, PieChart, ResponsiveContainer, Cell, Tooltip, Legend } from 'recharts'

const MonthlyBreakdown = (props) => {
    return (
        <ResponsiveContainer className="pieChartWrapper" width="100%" height="100%">
            <PieChart width={400} height={400}>
                <Tooltip />
                <Legend layout="vertical" verticalAlign="middle" align="right" />
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