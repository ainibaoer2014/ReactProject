import React,{Component} from 'react';
import './index.less';
export default class HomeHeader extends Component{
    render(){
        return (
            <div className="home-header bg">
                <div className="city">
                    {this.props.cityName}
                    <i className="iconfont icon-icon"></i>
                </div>
                <div className="search">
                    <i className="iconfont icon-sousuo-xianxing"></i>
                    <input type="text"/>
                </div>
                <div className="people">
                    <i className="iconfont icon-people"></i>
                </div>
            </div>
        )
    }
}