import './App.css'
// jsx 样式控制：
// 1. 行内样式：在元素上绑定一个 style 属性即可
// 2. 类名样式：在元素上绑定一个 className，指向css文件下的 .name

const generateStyle = {
    color: 'red',
    fontSize: '30px'
}

function style() {
    return (
        <div className='App'>
            <span style={generateStyle}>This is a span</span>
            <span className='thorinGordon'>This is a span</span>
        </div>
    );
}

export default style;