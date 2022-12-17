// props 数据参数 类型的校验 可使用 propTypes （实际业务上还是用 TypeScript 居多）
import React from "react";
import {v4 as uuid} from "uuid"
import PropTypes from "prop-types";

// props数据类型校验 同时还可以写： 必传、非必传
ListItem.propTypes = {
    // list: PropTypes.array
    list: PropTypes.array.isRequired
}

// 如果此处 list 并非数组而是别的类型的数据，则会报错，需要加一个校验，这样如果数据类型对不上，就会报 warning 警告
function ListItem({list}) {
    return (
        <div>{list.map(instance => <h3 key={uuid()}>{instance}</h3>)}</div>
    )
}

class App extends React.Component {

    state = {
        list: 9
    }

    render() {
        return (
            <div>
                <ListItem list={this.state.list}/>
            </div>
        )
    }
}

export default App