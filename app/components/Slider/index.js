import React, {Component} from 'react';
import ReactSwipe from 'react-swipe';//轮播图插件
import './index.less';
export default class Slider extends Component {
    constructor(){
        super();
        this.state={
            index:0
        }
    }
    render() {
        let opts = {
            continous: false,
            callback: (index) => {
                this.setState({
                    index
                })
            }
        };
        return (
            <div>
                <ReactSwipe className="carousel" swipeOptions={opts}>
                    <div>
                        <ul>
                            <li>
                                <i className="iconfont icon-nanzhuangleimufill"></i>
                                <span>男装</span>
                            </li>
                            <li>
                                <i className="iconfont icon-xiebaopeishileimufill"></i>
                                <span>靴子</span>
                            </li>
                            <li>
                                <i className="iconfont icon-nvzhuangleimufill"></i>
                                <span>女装</span>
                            </li>
                            <li>
                                <i className="iconfont icon-iconfontxiebaopeishi"></i>
                                <span>高跟鞋</span>
                            </li>

                            <li>
                                <i className="iconfont icon-crown"></i>
                                <span>皇冠</span>
                            </li>
                            <li>
                                <i className="iconfont icon-shumajiadianleimu"></i>
                                <span>相机</span>
                            </li>
                            <li>
                                <i className="iconfont icon-xiangbaoleimu"></i>
                                <span>箱包</span>
                            </li>
                            <li>
                                <i className="iconfont icon-xiangbaoleimu"></i>
                                <span>箱包</span>
                            </li>
                            <li>
                                <i className="iconfont icon-xiangbaoleimu"></i>
                                <span>箱包</span>
                            </li>
                            <li>
                                <i className="iconfont icon-xiangbaoleimu"></i>
                                <span>箱包</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <i className="iconfont icon-nanzhuangleimufill"></i>
                                <span>男装</span>
                            </li>
                            <li>
                                <i className="iconfont icon-xiebaopeishileimufill"></i>
                                <span>靴子</span>
                            </li>
                            <li>
                                <i className="iconfont icon-nvzhuangleimufill"></i>
                                <span>女装</span>
                            </li>
                            <li>
                                <i className="iconfont icon-iconfontxiebaopeishi"></i>
                                <span>高跟鞋</span>
                            </li>

                            <li>
                                <i className="iconfont icon-crown"></i>
                                <span>皇冠</span>
                            </li>
                            <li>
                                <i className="iconfont icon-shumajiadianleimu"></i>
                                <span>相机</span>
                            </li>
                            <li>
                                <i className="iconfont icon-xiangbaoleimu"></i>
                                <span>箱包</span>
                            </li>
                            <li>
                                <i className="iconfont icon-xiangbaoleimu"></i>
                                <span>箱包</span>
                            </li>
                            <li>
                                <i className="iconfont icon-xiangbaoleimu"></i>
                                <span>箱包</span>
                            </li>
                            <li>
                                <i className="iconfont icon-xiangbaoleimu"></i>
                                <span>箱包</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <i className="iconfont icon-nanzhuangleimufill"></i>
                                <span>男装</span>
                            </li>
                            <li>
                                <i className="iconfont icon-xiebaopeishileimufill"></i>
                                <span>靴子</span>
                            </li>
                            <li>
                                <i className="iconfont icon-nvzhuangleimufill"></i>
                                <span>女装</span>
                            </li>
                            <li>
                                <i className="iconfont icon-iconfontxiebaopeishi"></i>
                                <span>高跟鞋</span>
                            </li>

                            <li>
                                <i className="iconfont icon-crown"></i>
                                <span>皇冠</span>
                            </li>
                            <li>
                                <i className="iconfont icon-shumajiadianleimu"></i>
                                <span>相机</span>
                            </li>
                            <li>
                                <i className="iconfont icon-xiangbaoleimu"></i>
                                <span>箱包</span>
                            </li>
                            <li>
                                <i className="iconfont icon-xiangbaoleimu"></i>
                                <span>箱包</span>
                            </li>
                            <li>
                                <i className="iconfont icon-xiangbaoleimu"></i>
                                <span>箱包</span>
                            </li>
                            <li>
                                <i className="iconfont icon-xiangbaoleimu"></i>
                                <span>箱包</span>
                            </li>
                        </ul>
                    </div>
                </ReactSwipe>
                <ul className="dots">
                    <li className={this.state.index===0?"active":""}></li>
                    <li className={this.state.index===1?"active":""}></li>
                    <li className={this.state.index===2?'active':""}></li>
                </ul>
            </div>
        )
    }
}