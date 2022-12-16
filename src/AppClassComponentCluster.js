// 类组件的创建和渲染
import React from "react";

// 创建 类组件
// 必须重写一个 render 方法，该方法必须要要返回值
class FirstComponent extends React.Component {
    render() {
        return <div onClick={clickHandler}><button>This is a component based on class</button></div>
    }
}

const clickHandler = () => {
    console.log('组件事件被触发了');
}

// 渲染类组件
// 类组件也可以像一个HTML标签一样被渲染到页面中
function render() {
    return (
        <div>
            <FirstComponent/>
            <FirstComponent/>
        </div>);
}

export default render