import React from "react";

class Test extends React.Component {

    timer = null;

    // Test组件挂载时调用一次
    componentDidMount() {
        console.log('componentDidMount')
        // 创建定时器
        this.timer = setInterval(() => {
            console.log('定时器开启')
        }, 1000);
    }

    // Test组件卸载时调用一次
    componentWillUnmount() {
        console.log('componentWillUnmount')
        // 清理定时器
        clearInterval(this.timer)
    }

    state = {
        list: 9
    }

    render() {
        return (
            <div>
                Test Component
            </div>
        )
    }
}

class App extends React.Component {

    state = {
        flag: true
    }

    clickHandler = () => {
        this.setState({
            flag: !this.state.flag
        })
    }

    render() {
        return (
            <div>
                {/* 通过按钮不断地挂载、卸载 Test 组件，即可调用 Test 组件的 componentDidMount 和 componentWillUnmount 方法 */}
                {this.state.flag ? <Test/> : null}
                <button onClick={this.clickHandler}>停止/继续</button>
            </div>
        )
    }
}

export default App