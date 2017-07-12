//切换城市
import * as Types from '../action-types/userInfo';

//actionCreator  是创建action动作的函数
export function update(data) {//修改的动作,要修改的城市的名字和数据
    return {
        type:Types.UPDATE_CITY,
        data
    }
}