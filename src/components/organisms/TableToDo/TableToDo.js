import { TableSection } from '../../molecules/TableSection/TableSection';
const TableToDo = ({sections},props) => {
    return (
        <div className='flex justify-around'>
            {sections.map(sectionName =>(
                <TableSection sectionTitle={sectionName}/>
            ))}
        </div>
    );
  };
  
  export { TableToDo };