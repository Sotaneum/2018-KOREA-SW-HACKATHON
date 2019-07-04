import React, { Component } from 'react';
import {PieChart, Pie, Cell} from 'recharts';
/*
const data = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
                  {name: 'Group C', value: 300}, {name: 'Group D', value: 200}];
 */
function getRamdomColor() {
    return '#' + (function co(lor) {
        return (lor += [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'][Math.floor(Math.random() * 16)]) && (lor.length === 6) ? lor : co(lor);
    })('');
}

function renderCustomizedLabel({cx, cy, midAngle, innerRadius, outerRadius, percent }) {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
}

function createPie(data, cx, cy,labelLine,Color=null,index) {
    if (Color == null) {
        Color = getRamdomColor();
    }
    const COLORS = [];
    var data_len= data.length;
    for (var i=0;i<data_len;i++){
        COLORS.push(getRamdomColor());
    }
    return <Pie
        data={data}
        cx={cx}
        cy={cy}
        labelLine={labelLine}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill={Color}
        dataKey={"value"}
        >
        {
            data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
        }
    </Pie>;
}

class optPieChart extends Component {
    render() {
        return (
            <div className="optPieChart">
                <PieChart width={this.props.width} height={this.props.height}>
                    {createPie(this.props.data,this.props.cx,this.props.cy,this.props.labelLine)}
                </PieChart>
            </div>
        );
    }
}

export default optPieChart;