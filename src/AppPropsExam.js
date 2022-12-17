import React from "react";

function ListComponent({instance, getDeleteFunction}) {
    return (
        <div key={instance.id}>
            <h3>{instance.name}</h3>
            <p>车队: {instance.team}</p>
            <p>年龄: {instance.age}</p>
            <button onClick={(e) => getDeleteFunction(e, instance.id)}>删除</button>
        </div>
    )
}

class App extends React.Component {

    state = {
        list: [
            {
                id: 1,
                name: 'Kimi',
                team: 'Ferrari',
                age: 37
            },
            {
                id: 2,
                name: 'Leclerc',
                team: 'Ferrari',
                age: 28
            },
            {
                id: 3,
                name: 'Gasly',
                team: 'Alpine',
                age: 27
            }
        ]
    }

    deleteData = (e, id) => {
        const newList = this.state.list.filter(instance => instance.id !== id);
        this.setState({
            list: newList
        })
    }

    render() {
        return (
            <div>
                {this.state.list.map(instance=>(
                    <ListComponent instance = {instance} getDeleteFunction={this.deleteData}/>
                ))}

            </div>
        );
    }
}

export default App