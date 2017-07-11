import React,{Component} from 'react';
import RouterMap from '../routes/index';
export default class App extends Component{
    //给组件定义状态
    constructor(){
        super();
        this.state={
            done:false
        }
    }
    render(){
        return (
            <div>
                {/*如果路径为/  RouterMap 为Home组件*/}
                {this.state.done? <RouterMap/>:<div>正在加载...</div>}
            </div>
        )
    }
    //当页面加载完成
    componentDidMount(){
        this.setState({
            done:true
        })
    }
}