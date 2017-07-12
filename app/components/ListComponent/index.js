//渲染数据的列表组件
import React,{Component} from 'react';
import ListItem from './ListItem/index';
export default class ListComponent extends Component{
    render(){
        return (
            <div>
                {this.props.data.map((item,index)=>(
                    <ListItem key={index} data={item}/>
                ))}
            </div>
        )
    }
}