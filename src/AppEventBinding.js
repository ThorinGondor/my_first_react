// 事件绑定传额外参数
function Module0(){
    return (
        <div onClick={(event) => clickHandler(event, 'this is a msg')}>
            Click Me
        </div>
    );
}

const clickHandler = (e, msg) => {
    e.preventDefault();
    console.log('param: ', msg)
}

function render() {
    return (
        <Module0/>
    );
}

export default render