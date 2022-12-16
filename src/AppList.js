// 列表展示 使用map
const songs = [
    {id: 1, name: 'Curry'},
    {id: 2, name: 'Thompson'},
    {id: 3, name: 'Wiggins'}
]

// key 仅仅在内部使用，不会出现在真实的DOM结构中
function App() {
    return (
        <div className="APP">
            <ul>
                {songs.map(song=><li key={song.id}>{song.name}</li>)}
            </ul>
        </div>
    );
}

export default App;