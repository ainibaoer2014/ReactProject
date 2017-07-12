//合并所有reducer的方法  导出去  让store使用

import {combineReducers} from 'redux';
import {userInfo} from './userInfo';
export default combineReducers({
    userInfo
});