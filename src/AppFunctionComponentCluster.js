// 函数组件的创建和渲染
// 创建（函数组件名称需要大写开头）
function Module1() {
    return (
        <div>
            <button onClick = {clickHandler}>This is the first module</button>
        </div>
    );
}

function Module2() {
    return (
        <div>
            <a onClick={clickHandler2} href='https://www.baidu.com'>百度</a>
        </div>
    );
}

const clickHandler = () => {
    console.log('组件事件被触发了');
}

const clickHandler2 = (event) => {
    event.preventDefault(); // 阻止默认的动作 比如 href 下的跳转
    console.log('组件2事件被触发了');
}

// 渲染
function render() {
    return (
        <div>
            {/* 渲染 module 组件
              * 函数组件可以像一个HTML标签一样被渲染到页面中
              */}
            <Module1/>
            <Module1/>
            <Module2/>
        </div>
    );
}

export default render