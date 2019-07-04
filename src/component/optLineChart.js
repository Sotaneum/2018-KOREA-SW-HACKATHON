import React, { Component } from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import {getRandomColor} from './optAPI';
/*
 data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];
 */


function getTitle(data){
    for (var col in data[0]){
        return col;
    }
}
function createLines(data){
    let list=[];
    var title=getTitle(data);
    for (var col in data[0]){
        if (title !== col)
            list.push(createLine("monotone",col,col));
    }
    return list;
}

function createLine(Type, DataKey,idx,Color=null){
    if(Color==null){
        Color=getRandomColor();
    }
    return <Line
        type={Type}
        dataKey={DataKey}
        stroke={Color}
        key={idx}
    />;
}

class optLineChart extends Component {
    render() {
        return (
            <div className="optLineChart" style={{overflow:"scroll", width:this.props.width, overflowY:"hidden"}}>
                <p align="center">{this.props.text}</p>
                <center>
                    <LineChart width={this.props.width-20} height={this.props.height-40} data={this.props.data}
                               margin={this.props.margin}>
                        <XAxis dataKey={getTitle(this.props.data)}/>
                        <YAxis/>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <Tooltip/>
                        <Legend/>
                        {createLines(this.props.data)}
                    </LineChart>
                </center>
            </div>
        );
    }
}

export default optLineChart;