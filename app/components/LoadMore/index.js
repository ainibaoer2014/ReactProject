//加载更多组件
import React,{Component} from 'react';
import './index.less';
export default class LoadMore extends Component{
    render(){
        return (
            <div>
                {this.props.hasMore?
                    <div className="has-more" onClick={this.loadMore.bind(this)} ref="more">加载更多</div>
                    :<div>我是有底线的</div>
                }
            </div>
        )
    }

    componentDidMount(){
       //绑定滚动事件
        this.fn=()=>{
            clearTimeout(this.timer);
            this.timer=setTimeout(()=> {//每次滚动只出打印一次rolling
                console.log('rolling');
                //先判断是否正在加载，
                if(this.props.isLoading){
                    return;
                }

                //判断按钮屏幕顶端的高度 和 可视窗口的距离
                let screen=window.screen.height;//屏幕的高度
                let top=this.refs.more.getBoundingClientRect().top;//获取元素的位置，上、下、左、右
                if(top<screen){//如果按钮进入可视窗口 则加载
                    this.props.loadMore();
                }
            },50)
        };
        window.addEventListener('scroll',this.fn)
    }
    componentWillUnmount(){
        //移除滚动事件
        window.removeEventListener('scroll',this.fn)
    }

    loadMore(){//调用父级传递过来的加载更多的函数
        if(this.props.isLoading){//当页面正在加载时，不能点击 加载更多的按钮 防止正在加载 数据还没渲染到页面  多次点击按钮 最后出来很多的数据
            return;
        }
        this.props.loadMore();
    }
}