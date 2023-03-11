import { Button } from '../../atoms/Button';
const Header = ({ title, isButton, buttonValue}, props) => {
    return (
      <header className='page-head'>
        {isButton &&
            <Button buttonStyle='mt-5 ml-5 p-2 rounded bg-sky-500 text-white' value={buttonValue} />
        }
        <div className='flex justify-center'>
            <h1 className="text-3xl font-bold">{title}</h1>
        </div>
      </header>
    );
  };
  
  export { Header };