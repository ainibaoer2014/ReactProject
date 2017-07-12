import * as Types from '../action-types/userInfo';

let initState={};//设置初始状态
export function userInfo(state=initState,action) {//制定规则的方法 根据当前的状态 给当前的动作 制定规则
    switch (action.type){
        //将默认传入的state,更新为最新的状态
        case Types.UPDATE_CITY:
            return action.data;
        default:
            return state;
    }
}