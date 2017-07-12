//home 首页 获取数据的API接口 /api/ad

import {get} from '../index';
export function getAd() {
    return get('/api/ad');
}
//获取列表数据
export function getList(city,page) {
    return get('/api/list/'+city+'/'+page);
}
