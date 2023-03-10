import { Button } from '../../atoms/Button';
const TableToDo = ({ title, isButton, buttonValue}, props) => {
    return (
        <div className='flex justify-around'>
            <div className='bg-slate-300'>
                <p>backlog</p>
            </div>
            <div>
                <p>on going</p>
            </div>
            <div>
                <p>finish</p>
            </div>
        </div>
    );
  };
  
  export { TableToDo };