import React from "react";

function Component(props) {
    return (
        <div>{props.msg}</div>
    );
}

// 使用 defaultProps设置 props 默认值，若没有数据传入，会使用默认值
// 但还是建议直接在函数的 props 解构 设置默认值，如下面的 Component2() 所示
Component.defaultProps = {
    msg: 'This is a default value'
}

// 推荐的默认 props default value 设置
function Component2({message='default value'}) {
    return (
        <div>{message}</div>
    );
}

// props 设置默认值，防止报错
class App extends React.Component {

    state = {
        list: 9
    }

    render() {
        return (
            <div>
                <Component/>
                <Component2/>
            </div>
        )
    }
}

export default App