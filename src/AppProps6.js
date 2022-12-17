import React, {createContext} from "react";

// 本节讲述如何跨组件通信：
// 即无需通过中间的组件，即可直接从上层向任意的下层组件传递数据
// 1.需要创建一个 context 对象（注意 import 一下），解构出 Provider 和 Consumer 对象：
//     const (Provider, Consumer) = createContext()
// 2. 使用 Provider 包裹组件提供的数据
//     <Provider value={this.state.message}>{/** 根组件 **/}</Provider>
// 3. 需要用到该数据的组件使用 Consumer 包获取数据
//     <Consumer> {value => /* 基于Context之进行渲染 */} </Consumer>
// 请看下面这个例子， App->A->C，然后 App 传 data 给 C

// 1. 先创建 context 上下文
const {Provider, Consumer} = createContext();

function ComA() {
    return (
        <div>
            <h4>This is ComA</h4>
            <br/>
            <ComC/>
        </div>
    );
}

function ComB() {
    return (
        <div>
            <h4>This is ComB</h4>
            <br/>
            <ComD/>
            <ComE/>
        </div>
    );
}

function ComC() {
    return (
        <div>
            This is ComC
            <br/>
            {/* 3. 通过 Consumer 使用数据 */}
            <Consumer>{value=><span>|---{value}</span>}</Consumer>
        </div>
    );
}

function ComD() {
    return (
        <div>
            This is ComD
        </div>
    );
}

function ComE() {
    return (
        <div>
            This is ComE
        </div>
    );
}


class App extends React.Component {

    state = {
        msg: 'This is source data'
    }

    render() {
        return (
            // 2. 用 Provider 包括根组件！
            <Provider value={this.state.msg}>
                <div>
                    <ComA/>
                    <br/>
                    <ComB/>
                </div>
            </Provider>
        );
    }
}

export default App;