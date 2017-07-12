import React,{Component} from 'react';
import RouterMap from '../routes/index';
//在这个页面连接redux
import {connect} from 'react-redux';
//绑定ActionCreators组成的对象
import {bindActionCreators} from 'redux';
//获取所有的ActionCreator组成的对象
import * as Actions from '../actions/userInfo';
import {getStorage} from '../local';
class App extends Component{
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
        //先去本地查找 是否存储过localStorage名字为cityName的
        //1. 没有cityName  默认值为 杭州
        //2. 将当前的城市存入redux
        let cityName=getStorage('cityName');
        if(cityName==undefined){
            cityName='杭州'
        }
        //页面加载后 设置一个城市
        this.props.userActions.update({
            cityName
        });
        this.setState({
            done:true
        })
    }
}

export default connect(
    state=>{//mapStateToProps
        return {}
    },
    dispatch=>{//mapDispatchToProps
        return {
            userActions:bindActionCreators(Actions,dispatch)
        }
    }
)(App)