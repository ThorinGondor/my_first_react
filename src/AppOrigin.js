// 1. 识别常规变量
const name = 'kimi'

// 2. 原生js方法调用
const getAge = () => {
    return 18
}

// 3. 三元运算符（常用）
const flag = true

function AppOrigin() {
    return (
        // jsx 只能有一个父元素div
        <div className="App">
            {name}
            {getAge()}
            {flag ? '真棒' : '真菜'}
        </div>
    ); // 括号内就是JSX
}

export default AppOrigin;
