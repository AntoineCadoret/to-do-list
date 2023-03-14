import React, { useState } from 'react';
import { TableSection } from "../../molecules/TableSection/TableSection";
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ModalSectionUpdate from
  '../../organisms/ModalTabeUpdate/ModalSectionUpdate';
import { Button } from '../../atoms/Button';

const TableToDo = () => {
  const [isAdding, setIsAdding] = useState(false);
  const sectionTable = useSelector((state) => state.sections.sections);

  const addSectionHandler = () => {
    setIsAdding(true);
  };
  const closeModalHandler = () => {
    setIsAdding(false);
  };
  return (
    <>
      {isAdding && <ModalSectionUpdate
        modifType='add'
        closeHandler={closeModalHandler}
      />}
      <div className='flex flex-col'>
        <div className="flex justify-around  gap-4">
          {sectionTable.map((sectionName, index) => (
            <TableSection
              key={`${sectionName}_index_${index}`}
              sectionTitle={sectionName}
            />
          ))}
        </div>
        <Button
          value = 'Add a section'
          buttonStyle='m-10
          w-1/4
          p-2
          rounded
          bg-sky-500
          text-white
          self-center
          hover:bg-sky-700'
          clickHandle={addSectionHandler}
        />
      </div>
    </>
  );
};
TableToDo.propTypes = {
  sections: PropTypes.array,
  removeOneSection: PropTypes.func,
};

export { TableToDo };
