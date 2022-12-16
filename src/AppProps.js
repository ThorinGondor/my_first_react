import React from "react";

// 组件通信
/**
 * 组件之间可能会有以下关系：
 * 1. 父子关系：最重要
 * 2. 兄弟关系：自定义事件模式产生技术方法 eventbus 通过共同的父组件通信
 * 3. 其他关系：mobx/redux/基于hook的方案
 */

// App 父组件，两种 Son 子组件
class App extends React.Component {
    // 父类的数据
    state = {
        msg: 'This is a message'
    }
    render() {
        return (
            <div>
                <SonBasedFunction my_msg={this.state.msg} mmm={this.state.msg}/>
                <SonBasedClass my_msg={this.state.msg}/>
            </div>
        );
    }
}

// 函数式组件的 Son
// 函数括号使用 props 即可传参给子函数组件
function SonBasedFunction(props) {
    return (
        <div>我是函数子组件: {props.my_msg}---{props.mmm}</div>
    );
}

// 类组件的Son
// 使用 this.props 子类组件可以从父类获取参数
class SonBasedClass extends React.Component {
    render() {

        return (
            <div>我是类子组件: {this.props.my_msg}</div>
        );

    }
}

/*注意：
 * props是只读对象，子组件只能读取props中的数据，不能对props做修改
 * props 支持传递任何数据类型：字符串、数字、布尔值、数组、对象、函数、JSX（也就是模板） 上述演示的传递字符串
* */
export default App;