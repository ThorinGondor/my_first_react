import React from "react";

// 本节讲述如何兄弟间通信：
// 即 SonA与SonB之间通信，前提是两个组件拥有同一个父组件
// 思路：
// 1. SonB把数据交给父亲App（子传父）
// 2. 然后App再把数据传递给SonA，完成通信（父传子）
// App相当于完成一个中转站、网关的功能
function SonA({msg}) {
    return (
        <div>This is sonA: {msg}</div>
    );
}

function SonB({getGateway}){
    const sonBMessage = 'Data from SonB';
    return (
        <div>This is sonB: <button onClick={() => getGateway(sonBMessage)}>SonB按钮</button></div>
    );
}

class App extends React.Component {

    state = {
        msg: null
    }
    gateway = (data) => {
        console.log('App gateway get data: ', data);
        this.setState({
            msg: data
        })
    }

    render() {
        return (
            <div>
                <SonA msg={this.state.msg}/>
                <SonB getGateway={this.gateway}/>
            </div>
        );
    }
}
export default App