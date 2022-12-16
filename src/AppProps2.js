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
        list: [1, 2, 3],
        userInfo: {
            id: 1,
            name: 'Kimi',
            age: 25,
            team: 'Ferrari'
        }
    }

    fatherFunction = () => {
        console.log('Father Function')
    }
    render() {
        return (
            <div>
                <SonBasedFunction
                    my_list={this.state.list}
                    user_info={this.state.userInfo}
                    getFatherFunction={this.fatherFunction}
                    getTemplate={<span>This is a span from father</span>}
                />
                <SonBasedClass my_list={this.state.list}/>
            </div>
        );
    }
}

// 函数式组件的 Son
// 函数括号使用 props 即可传参给子函数组件
// 以下演示，父类组件传递了数组、对象、函数、模板给子函数组件
function SonBasedFunction(props) {

    return (
        <>
            <div>我是函数子组件: {props.my_list.map(instance=><p key={instance}>{instance}</p>)}</div>
            <div>UserInfo: {props.user_info.name}, {props.user_info.age}, {props.user_info.team}</div>
            <div>
                <button onClick={props.getFatherFunction}>触发父组件传入的函数</button>
            </div>
            <div>
                {props.getTemplate}
            </div>
        </>
    );
}

// 类组件的Son
// 使用 this.props 子类组件可以从父类获取参数
class SonBasedClass extends React.Component {
    render() {

        return (
            <div>我是类子组件: {this.props.my_list}</div>
        );

    }
}

/*注意：
 * props是只读对象，子组件只能读取props中的数据，不能对props做修改
 * props 支持传递任何数据类型：字符串、数字、布尔值、数组、对象、函数、JSX（也就是模板） 上述演示的传递字符串
* */
export default App;