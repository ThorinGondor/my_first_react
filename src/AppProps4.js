import React from "react";

// 本节实现 子组件将数据传父组件的方式：
// 子传父：子组件调用父组件传递过来的函数，并把数据当成函数的实参即可，这样父组件的函数就可以获得子组件传来的数据
function Son({getFatherFunction}) {
    return (
        <div>
            This is son component
            <br/>
            <button onClick={() => getFatherFunction('Click This From Son Component!')}>点击</button>
        </div>
    );
}

class App extends React.Component {

    fatherFunction = (data) => {
        // 输出子组件传来的数据
        console.log(data);
    }
    render() {
        return (
            <div>
                <Son getFatherFunction={this.fatherFunction}/>
            </div>
        );
    }
}
export default App