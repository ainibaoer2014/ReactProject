import React from 'react';
import {render} from 'react-dom';
import App from './containers/index';
import './assets/index.less';
//将store注入App组件中
import {Provider} from 'react-redux';
//导入store
import {configureStore} from './store/index';
let store=configureStore();//生成store 可以传入一个初始状态
render (
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app'));