import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import * as api from './component/optAPI';

//파이차트( 나이,성별 ) ,라인차트(방문자수 유동인구수)
class App extends Component {
    getData = async () => {
        const info = await Promise.all([api.getJSON()]);
        var data=info[0].data;
        api.setupDate(data);
    }
    render() {
        this.getData();
        return (
            <div className="App">
                <header className="App-header">
                    <a href={"?"}><img src={logo} className="App-logo" alt="logo"/></a>
                </header>
            </div>
        );
    }
}
export default App;
