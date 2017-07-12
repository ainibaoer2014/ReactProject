//前端获取数据的方法
//fetch:前端获取后端数据的方法，是基于promise的，引用'es6-promise'插件，不兼容时，'whatwg-fetch'插件会降低为原生ajax代码请求数据
//fetch:用法
//fetch(url,{Accept:'application/json'}).then(res=>res.json()).then(data=>console.log(data));

import 'whatwg-fetch';
import 'es6-promise';

export function get(url) {
    return fetch(url,{
        Accept:'application/json'
    })
}