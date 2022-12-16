import React from "react";

// 类组件状态
class Counter extends React.Component {
    // 1. 定义组件状态
    state = {
        // 此处可以定义各种属性，全部都是当前组件的状态
        name: 'Arron Brooks',
        group: 'Houston Rockets',
        count: 0
    }

    rectifyHandler = () => {
        // 3. 修改状态
        this.setState({name: 'Yao Ming', group: 'Chinese Rockets'});
    }

    addCount = () => {
        const count = this.state.count;
        this.setState({count: count + 1});
    }
    render() {
        return (
            <div>
                This is a component
                <br/>
                {/* 2. 使用状态*/}
                Name: {this.state.name}
                <br/>
                {/* 2. 使用状态*/}
                Group: {this.state.group}
                <br/>
                {/* 3. 修改状态*/}
                <button onClick={this.rectifyHandler}>Rectify</button>
                <br/>
                <button onClick={this.addCount}>CLICK TO ADD</button>
                <br/>
                <h2 style={{color: 'red'}}>{this.state.count}</h2>
            </div>
        );
    }
}

/**
 * 总结：
 * 1. 编写组件，其实就是编写原生js类或者函数，不过，现在基本都走函数组件了，类组件会用即可，有些老项目还是有的
 * 2. 定义状态必须通过state实例属性的方法，提供一个对象，名称是固定的叫做state不可变更
 * 3. 修改state中的任何属性都应该通过setState方法
 * 4. 类中的this关键词的使用，很容易出现指向错误，应注意
 * @returns {JSX.Element}
 */


function root() {
    return (
        <div>
            <Counter/>
        </div>
    );
}

export default root