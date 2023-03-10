import { Header } from '../components/organisms/Header/Header';
import { TableToDo } from '../components/organisms/TableToDo/TableToDo';
const Home = ({ title, isButton, buttonValue}, props) => {
    return (
        <div className="App">
            <Header title='My To-Do List' isButton={1} buttonValue='Add a task'/>
            <TableToDo/>
        </div>
    );
  };
  
  export { Home };