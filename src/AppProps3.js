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
                <SonBasedFunction2
                    my_list={this.state.list}
                    user_info={this.state.userInfo}
                    getFatherFunction={this.fatherFunction}
                    getTemplate={<span>This is a span from father</span>}
                />
            </div>
        );
    }
}

// 函数式组件的 Son
// 函数括号使用 props 即可传参给子函数组件
// 以下演示，父类组件传递了数组、对象、函数、模板给子函数组件
function SonBasedFunction(props) {

    // props 可以解构
    const {my_list, user_info, getFatherFunction, getTemplate} = props;
    return (
        <>
            <div>我是函数子组件: {my_list.map(instance=><p key={instance}>{instance}</p>)}</div>
            <div>UserInfo: {user_info.name}, {user_info.age}, {user_info.team}</div>
            <div>
                <button onClick={getFatherFunction}>触发父组件传入的函数</button>
            </div>
            <div>
                {getTemplate}
            </div>
        </>
    );
}

// 现在比较流行的 props 解构写法
function SonBasedFunction2({my_list, user_info, getFatherFunction, getTemplate}) {

    // props 可以解构
    return (
        <>
            <div>我是函数子组件: {my_list.map(instance=><p key={instance}>{instance}</p>)}</div>
            <div>UserInfo: {user_info.name}, {user_info.age}, {user_info.team}</div>
            <div>
                <button onClick={getFatherFunction}>触发父组件传入的函数</button>
            </div>
            <div>
                {getTemplate}
            </div>
        </>
    );
}

/*注意：
 * props是只读对象，子组件只能读取props中的数据，不能对props做修改
 * props 支持传递任何数据类型：字符串、数字、布尔值、数组、对象、函数、JSX（也就是模板） 上述演示的传递字符串
* */
export default App;