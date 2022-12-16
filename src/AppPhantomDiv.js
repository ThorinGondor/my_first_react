
function AppPhantom() {
    return (
        // 只能有一个div父节点，若需要多个父节点，则需要一个幽灵节点包括多个父节点
        <>
            <div>div1</div>
            <div>div2</div>
        </>
    );
}

export default AppPhantom;