import axios from 'axios';
import LineChart from './optLineChart';
import RadialBarChart from './optRadialBarChart';
import PieChart from './optPieChart';
import List from './optList';
import ReactDOM from "react-dom";
import React from 'react';



/*
* ========================================================================
* 컴포넌트 선언부
* ========================================================================
* */

export function loadLineChart(data,text){
    return <LineChart width={600} height={300} data={data}
                           margin={{top: 5, right: 30, left: 20, bottom: 5}} text={text}/>
}

export function loadAgeChart(data,col,text){
    return <RadialBarChart width={300} height={300} cx={125} cy={125} innerRadius={20} outerRadius={125}
                                barSize={10} data={data} col={col} text={text}/>
}

export function loadSexChart(data,col,text){
    return <RadialBarChart width={300} height={300} cx={150} cy={150} innerRadius={20} outerRadius={100}
                                barSize={10} data={data} col={col} text={text}/>
}

// eslint-disable-next-line
export function loadPieChart(data,text){
    return <PieChart width={300} height={300} title={text} data={data} cx={150} cy={150} labelLine={false}/>
}
/*
* ========================================================================
* 컴포넌트 데이터 양식 선언부
* ========================================================================
* */

export function getSexData(){
    return [
        {name:'Masculine', value:0, fill: getRandomColor()},
        {name:'Feminine', value:0, fill: getRandomColor()},
        {name:'Etc', value:0, fill: getRandomColor()}];
}

export function getAgeData(){
    return [
        {name: '1-17', value:0, fill: getRandomColor()},
        {name: '18-24', value:0,fill: getRandomColor()},
        {name: '25-29', value:0,fill: getRandomColor()},
        {name: '30-34', value:0,fill: getRandomColor()},
        {name: '35-39', value:0,fill: getRandomColor()},
        {name: '40-49', value:0,fill: getRandomColor()},
        {name: '50+', value:0,fill: getRandomColor()},
        {name: 'unknow', value:0,fill: getRandomColor()}];
}

export function getDateData(){
    return [];
}

export function getLineData(){
    return [];
}

/*
* ========================================================================
* 기타 유용한 함수
* ========================================================================
* */

export function getRandomColor() {
    return '#' + (function co(lor) {
        return (lor += [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'][Math.floor(Math.random() * 16)]) && (lor.length === 6) ? lor : co(lor);
    })('');
}

/*
* ========================================================================
* JSON 데이터 처리
* ========================================================================
* */

export function getJSON(url='http://duration.digimoon.net/dev/Hackathon/test2.json'){
    if(url==null || url===""){
        url='http://duration.digimoon.net/dev/Hackathon/test2.json'
    }
    var data=axios.get(url);
    return data;
}

export function setupDate(json){
    var date = getDateData();
    for (var idx in json){
        var timestamp = new Date(json[idx].timestamp);
        var createDate = timestamp.getFullYear() + "-" + ((timestamp.getMonth()+1 < 10) ? "0" : "") + (timestamp.getMonth()+1) + "-" + ((timestamp.getDay()+1 < 10) ? "0" : "") + (timestamp.getDay()+1);
        var check=1;
        for (var idx_ in date){
            if( createDate===date[idx_].date){
                check=2;
                break;
            }
        }
        if(check===1){
            date.push({"date":createDate});
        }
    }
    date.sort(function (a, b) {
        var c=Number(a.date.replace(/-/gi, ""));
        var k=Number(b.date.replace(/-/gi, ""));
        return c-k;
    });
    ReactDOM.render(<List width={'200px'} height={'600px'} title={"Date"} data={date} json={json}></List>, document.getElementById('date_panel'));
    setupData(json,date[0].date);
}

export function setupData(json,date) {
    //데이터 양식 받아오기
    var sex = getSexData();
    var age = getAgeData();
    var line = getLineData();
    //JSON 처리
    for (var idx in json) {
        var timestamp = new Date(json[idx].timestamp);
        var createDate = timestamp.getFullYear() + "-" + ((timestamp.getMonth()+1 < 10) ? "0" : "") + (timestamp.getMonth()+1) + "-" + ((timestamp.getDay()+1 < 10) ? "0" : "") + (timestamp.getDay()+1);
        //선택한 시간만 출력
        if (createDate === date) {
            sex[getIndexSex(json[idx].sex)].value += 1;
            age[getIndexAge(json[idx].age)].value += 1;
            var time = ((timestamp.getHours() < 10) ? "0" : "") + timestamp.getHours()+"시";
            //Population, Visits 체크
            var check = 1;
            for (var idx_ in line) {
                if (line[idx_].name === time) {
                    line[idx_].Population += 1;
                    if (getEnters(json[idx]) === true) {
                        line[idx_].Visits += 1;
                    }
                    check = 2;
                    break;
                }
            }
            if (check === 1) {
                if (getEnters(json[idx]) === true) {
                    line.push({name: time, Visits: 1, Population: 1});
                } else {
                    line.push({name: time, Visits: 0, Population: 1});
                }
            }
        }
    }
    //데이터 정렬
    line.sort(function (a, b) {
        return Number(a.name.replace("시","")) - Number(b.name.replace("시",""));
    })

    //메서드 생성
    ReactDOM.render(<h2>{date}</h2>, document.getElementById('date'));
    //ReactDOM.render(loadAgeChart(age, "age", "Age Chart"), document.getElementById('age'));
    //ReactDOM.render(loadSexChart(sex, "value", "Sex Chart"), document.getElementById('sex'));
    ReactDOM.render(loadPieChart(age, "Age Chart"), document.getElementById('age'));
    ReactDOM.render(loadPieChart(sex, "Sex Chart"), document.getElementById('sex'));
    ReactDOM.render(loadLineChart(line, "Visits Flow population Chart"), document.getElementById('line'));

}

export function getIndexSex(data) {
    if (data === 'm') {
        return 0;
    } else if (data === 'f') {
        return 1;
    } else {
        return 0;
    }
}

export function getIndexAge(data) {
    if (data >= 50) {
        return 6;
    } else if (data >= 40) {
        return 5;
    } else if (data >= 35) {
        return 4;
    } else if (data >= 30) {
        return 3;
    } else if (data >= 25) {
        return 2;
    } else if (data >= 18) {
        return 1;
    } else if (data >= 1) {
        return 0;
    } else {
        return 7;
    }
}

export function getEnters(json){
    return (json.is_entered===1)?true:false;
    /*
    // next json 확인
    if(json.is_entered===1){
        return true;
    }else if(json.next==null){
        return false;
    }else{
        return getEnters(json.next);
    }*/
}