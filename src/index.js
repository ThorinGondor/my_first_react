import React from 'react'; // React 框架的核心包
import ReactDOM from 'react-dom/client'; // 专门做渲染的包
import './index.css'; // 应用的全局样式文件
import App from './AppLifeCycle'; // 引入的根组件

const root = ReactDOM.createRoot(document.getElementById('root'));
// 渲染根组件APP 到一个id为root的dom节点上
root.render(
    // 严格模式节点需要去掉
    // userEffect执行时机
    <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
