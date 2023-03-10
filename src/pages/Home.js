import { Header } from '../components/organisms/Header/Header';
import { TableToDo } from '../components/organisms/TableToDo/TableToDo';
const Home = ({ title, isButton, buttonValue}, props) => {
    const sections = ['Backlog', 'On going', 'finish'];
    return (
        <div className="App">
            <Header title='My To-Do List' isButton={1} buttonValue='Add a task'/>
            <TableToDo sections = {sections}/>
        </div>
    );
  };
  
  export { Home };