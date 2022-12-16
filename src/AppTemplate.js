// 使用 模板 尽可能地复用代码
const getData = (type) => {
    if (type === 1) {
        return <h1>Red Tag</h1>
    }
    if (type === 2) {
        return <h1>Green Tag</h1>
    }
    if (type === 3) {
        return <h1>Blue Tag</h1>
    }
}

function template() {
    return (
        <div className='App'>
            {getData(1)}
            {getData(2)}
            {getData(3)}
        </div>
    );
}

export default template;