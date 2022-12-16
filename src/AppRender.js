// 条件渲染
// 三元表达式 逻辑&运算

const flag = true

function main() {
    return (
        <div className="App">
            {flag === true ? <h1>真的</h1> : <h1>假的</h1>}
        </div>
    );
}
export default main;