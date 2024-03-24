import './App.css';
import Input from './components/Input/input.component';
import Tasks from './components/Tasks/tasks.component';

function App() {
  return (
    <div className="App">
      <h1 className='title'>Todo List</h1>
      <div className='container'>
        <Tasks/>
        <Input />
      </div>
    </div>
  );
}

export default App;
