import React, { Component } from 'react';
import {RadialBarChart, RadialBar, Legend} from 'recharts';
/*
data2 = [
            {name: '18-24', uv: 31.47, pv: 2400, fill: '#8884d8'},
            {name: '25-29', uv: 26.69, pv: 4567, fill: '#83a6ed'},
            {name: '30-34', uv: 15.69, pv: 1398, fill: '#8dd1e1'},
            {name: '35-39', uv: 8.22, pv: 9800, fill: '#82ca9d'},
            {name: '40-49', uv: 8.63, pv: 3908, fill: '#a4de6c'},
            {name: '50+', uv: 2.63, pv: 4800, fill: '#d0ed57'},
            {name: 'unknow', uv: 6.67, pv: 4800, fill: '#ffc658'}
        ];
 */

function createBar(MinAngle,DataKey,Color=null) {
    if (Color == null) {
        Color = "Black";
    }
    return <RadialBar minAngle={MinAngle}
                      label={{position: 'insideStart', fill: Color}}
                      background
                      clockWise={true}
                      dataKey={DataKey}/>;
}

function createStyle(data){
    return {
        top:20,
        right:'-70px',
        lineHeight:'24px'
    };
}

class optRadialBarChart extends Component {
    render() {
        return (
            <div className="optLineChart">
                <p align="center">{this.props.text}</p>
                <RadialBarChart width={this.props.width}
                                height={this.props.height}
                                cx={this.props.cx}
                                cy={this.props.cy}
                                innerRadius={this.props.innerRadius}
                                outerRadius={this.props.outerRadius}
                                barSize={this.props.barSize}
                                data={this.props.data}>
                    <Legend iconSize={10}
                            width={120}
                            height={140}
                            layout='vertical'
                            verticalAlign='middle'
                            wrapperStyle={createStyle(this.props.innerRadius)}/>
                    {createBar(15, this.props.col)}
                </RadialBarChart>
            </div>
        );
    }
}

export default optRadialBarChart;