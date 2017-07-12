//获取数据的列表组件
import React,{Component} from 'react';
import {getList} from '../../../fetch/home';
import ListComponent from '../../../components/ListComponent/index';
import LoadMore from '../../../components/LoadMore/index';
export default class List extends Component{
    constructor(){
        super();
        this.state={
            hasMore:true,
            data:[],
            page:0,
            isLoading:true//是否正在加载，默认刚开始 页面正在加载
        }
    }
    render(){
        return (
            <div>
                {/*将数据传给ListComponent组件 让其展示*/}
                {this.state.data.length ?
                    <ListComponent data={this.state.data}/>
                    :<div>正在加载</div>
                }
                <LoadMore hasMore={this.state.hasMore} loadMore={this.loadMore.bind(this)} isLoading={this.state.isLoading}/>
            </div>
        )
    }
    componentDidMount(){
        this.processDate(getList(this.props.cityName,0));
    }

    //需要在当前写一个加载更多的函数，传递给loadMore当点击更多按钮，触发我们传递函数
    loadMore(){
        console.log('loading more...');
        this.setState({
            page:this.state.page+1,
            isLoading:true //每次点击加载按钮时，状态为正在加载
        },()=>{//这个回调函数可以获取到最新页码的状态
            this.processDate(getList(this.props.cityName,this.state.page));
        })
    }

    //处理成功后的逻辑
    processDate(result){
        result.then(res=>res.json()).then(({hasMore,data})=>{
            this.setState({
                hasMore,
                data:this.state.data.concat(data),//将原来的数据数组和最新的数据数组拼接起来
                isLoading:false//当获取完数据，不再进行正在加载
            })
        })
    }

}