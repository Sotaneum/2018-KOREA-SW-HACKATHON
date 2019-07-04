import React, { Component } from 'react';
import {setupData} from './optAPI';
import './optList.css';

class ContactInfo extends React.Component {
     constructor(props) {
         super(props);
         this.state = {
             date:this.props.date,
             json:this.props.json
         }
         this.onItemClick = this.onItemClick.bind(this);
     }
    onItemClick(){
         setupData(this.state.json,this.state.date);
    }
    render() {
        return(
            <li onClick={this.onItemClick}>{this.props.date}</li>
            );
    }
}
class optList extends Component {
    constructor(props) {
        super(props);
        var gwidth = this.props.width;
        var gheight = this.props.height;
        var gdata = this.props.data;
        var gtitle = this.props.title;

        if (gtitle == null) {
            gtitle = "Data";
        }
        if (gwidth == null) {
            gwidth = "200px";
        }
        if (gheight == null) {
            gheight = "200px";
        }
        if (gdata == null) {
            gdata = [];
        }

        this.state = {
            contactData: gdata,
            width: gwidth,
            height: gheight,
            title: gtitle,
            json:this.props.json
        };
    }

    render() {
        return (
            <div className="optList" width={this.state.width} height={this.state.height}>
                <h2>{this.state.title}</h2>
                <ul>
                    {this.state.contactData.map((contact) => {
                        return (<ContactInfo date={contact.date}
                                             key={contact.date}
                        json={this.state.json}/>);
                    })}
                </ul>
            </div>
        );
    }
}

export default optList;