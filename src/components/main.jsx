import React, { Component } from 'react';
import Sidebar from './sidebar'
import Content from './content'



export default class Main extends Component {


    render(){
        return (
            <div className="container px-3 py-3 pt-md-2 pb-md-4 mx-auto">
            <div className="row">
                <Sidebar/>
                <Content />
            </div>
        </div>
        )
    }
}