// children 属性
import React from "react";

function ListItem({children}) {
    return (
        <div>This is a List Item: {children}</div>
    )
}

//children可以是：
// 1. 普通文本
// 2. 普通标签元素
// 3. 函数
// 4. JSX（模板）
class App extends React.Component {
    render() {
        return (
            <div>
                <ListItem>
                    {/* 此处的子元素 'This is a children' 会自动出现在 children 属性里，所以，通过这种 children 方式也可以方便地通信给子函数组件 */}
                    {/*This is a children*/}
                    <div><p>This is a span</p></div>
                </ListItem>
            </div>
        )
    }
}

export default App