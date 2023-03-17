import React, { useState } from 'react';
import { Button } from "../../atoms/Button";
import PropTypes from 'prop-types';
import ModalSectionUpdate from
  '../../organisms/ModalTabeUpdate/ModalSectionUpdate';
import { useSelector } from 'react-redux';
import TaskCard from '../TaskCard/TaskCard';

const TableSection = ({ sectionTitle }, props) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const tasks = useSelector((state) => state.task.task);

  const updateSectionHandler = () => {
    setIsUpdating(true);
  };
  const closeModal = () => {
    setIsUpdating(false);
  };
  return (
    <>
      {isUpdating &&
        <ModalSectionUpdate
          title={sectionTitle}
          closeHandler={closeModal}
          modifType = 'update'
        />}
      <div className="rounded w-1/3 bg-slate-300">
        <Button
          buttonStyle='bg-sky-500 float-right p-2 hover:bg-sky-700'
          value='Update'
          clickHandle={updateSectionHandler}
        />
        <h2>{sectionTitle}</h2>
        {tasks.map((task, index) => (
          (task.completionLevel == sectionTitle) ?
              <TaskCard
              key={`${task}_index_${index}`}
              id={task.id}
              /> : ''
          ))}
      </div>
    </>
  );
};

TableSection.propTypes = {
  sectionTitle: PropTypes.string,
  removeSection: PropTypes.func,
};

export { TableSection };
