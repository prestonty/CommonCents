import React from 'react'
import { ResponsiveContainer, BarChart, XAxis, YAxis, Bar, Tooltip, Cell, CartesianGrid } from 'recharts'

import "../styles/chart.css"

const getPath = (x, y, width, height) => {
    return `M${x},${y+16} c0,-8.837,7.163,-16,16,-16 h${width-32} c8.837,0,16,7.163,16,16 v${height-16} h${-width} v${-height+16} z`;
  };  

const ColouredBar = (props) => {
    const { fill, x, y, width, height } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

var SemiAnnualSpending = (props) => {
    return (
        <ResponsiveContainer>
            <BarChart data={props.data} barCategoryGap={'30%'} strokeDasharray="4">
                <CartesianGrid vertical={false} />
                <XAxis dataKey="name" />
                <YAxis tickCount={6} />
                <Tooltip />
                <Bar dataKey="val" shape={<ColouredBar />}>
                    {props.data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={props.data[index].color} />
                    ))}
                </ Bar>
                {console.log(props.data)}
            </BarChart>
        </ResponsiveContainer>
    )
}

export default SemiAnnualSpending