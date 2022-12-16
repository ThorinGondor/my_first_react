import React from "react";
// 表单 受控组件
class Module extends React.Component {

    state = {
        msg: 'This is a msg'
    }

    getData = (e) => {
        debugger;
        this.setState(
            {msg: e.target.value}
        );
    }
    render() {
        return (
           <div>
               <h3>{this.state.msg}</h3>
               <input type='text' defaultValue={this.state.msg} onChange={(e) => this.getData(e)}/>
           </div>
        );
    }
}

function root() {
    return (
        <div>
            <Module/>
        </div>
    );
}

export default root