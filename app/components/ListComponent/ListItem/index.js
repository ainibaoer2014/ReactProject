import React,{Component} from 'react';
import './index.less';
export default class ListItem extends Component{
    render(){
        let {img,title,subTitle,price,distance,number,id}=this.props.data;
        return (
            <div className="list-item">
                <img src={img}/>
                <div className="list-item-content">
                    <h3>{title}</h3>
                    <p>{subTitle}</p>
                     <div>
                         <strong>￥{price}</strong>
                         <span>已售出:{number}</span>
                     </div>
                    <span className="distance">{distance}</span>
                </div>
            </div>
        )
    }
}
