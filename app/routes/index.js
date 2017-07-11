import React,{Component} from 'react';
//路由的两种类型  HashRouter  BrowserRouter
import {
    HashRouter as Router,//别名Router
    Route//一条一条的路由
}from 'react-router-dom';
import Home from '../containers/Home/index';
export default class RouterMap extends Component{
    render(){
        return (
            <div>
                <Router>
                    <div>
                        <Route path="/" component={Home}/>
                    </div>
                </Router>
            </div>
        )
    }
}