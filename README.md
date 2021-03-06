##React大型项目技术栈
- react react-router4 redux react-redux

##安装初始化
```
npm init -y
```

##webpack
- webpack:打包
- webpack-dev-server:起一个本地服务
```
npm install webpack webpack-dev-server
```

##babel
- babel-core:转译核心包
- babel-loader:转译加载器
- babel-preset-es2015:预设为es2015
- babel-preset-stage-0:组件可以使用扩展符
- babel-preset-react:解析react
- css-loader:解析css
- style-loader:解析style
- less-loader:解析less
- html-webpack-plugin:解析html的插件
```
npm install babel-core babel-loader babel-preset-es2015 babel-preset-stage-0 babel-preset-react css-loader style-loader less less-loader html-webpack-plugin -D
```
##react
- react-redux:连接redux的
- react-router-dom:路由
- react-dom:渲染页面
```
npm install react redux react-redux react-dom react-router-dom -S
```
##fetch
- fetch:获取数据的API,一般不兼容
- es6-promise:fetch是基于promise的，所以的下载该插件
- whatwg-fetch:当不支持fetch时，该插件就会将代码降低为原生的ajax获取数据
```
npm install es6-promise whatwg-fetch -D
```
## express
```
npm install express -S
```
##swipe插件
```
npm install swipe-js-iso react-swipe -S
```

##scripts
- 指定命令
```
"start","webpack-dev-server --port 5000 --open --progress --colors"
"build","webpack -p"
```
##目录结构
- components:小组件 木偶组件
- containers:页面组件或者自己的subpage目录下
 -- home
   --subpage:智能组件
   --index.js
-- index.js 用来控制显示哪一个页面

- store onlyOne
- actions 用户发布动作
- reducers 定义动作的规则
- action-types actions的名字
