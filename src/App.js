import './App.css';
import './components/atoms/Button';
import { Button } from './components/atoms/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button clickHandle='https://www.journaldequebec.com/' children='Add a task'/>
        <h1 className='text-3xl'>My To-Do List</h1>  
      </header>
    </div>
  );
}

export default App;
