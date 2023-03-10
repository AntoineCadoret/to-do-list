import './App.css';
import { Header } from './components/organisms/Header/Header';

function App() {
  return (
    <div className="App">
      <Header title='My To-Do List' isButton={1} buttonValue='Add a task'/>
    </div>
  );
}

export default App;
