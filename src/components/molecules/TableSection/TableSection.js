import React, { useState } from 'react';
import { Button } from "../../atoms/Button";
import PropTypes from 'prop-types';
import ModalSectionUpdate from
  '../../organisms/ModalTabeUpdate/ModalSectionUpdate';
import { useSelector, useDispatch } from 'react-redux';
import { Droppable } from 'react-drag-and-drop';
import { taskAction } from "../../../store/storage";
import TaskCard from '../TaskCard/TaskCard';

const TableSection = ({ sectionTitle }, props) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const tasks = useSelector((state) => state.task.task);
  const dispatch = useDispatch();

  const handleDropTask = (data, event) => {
    dispatch(taskAction.updateTaskSection({
      index: data.task,
      completion: sectionTitle,
    }));
  };
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
      <Droppable
        types={['task']}
        onDrop={handleDropTask}
        className="rounded w-1/3 bg-slate-300">
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
      </Droppable>
    </>
  );
};

TableSection.propTypes = {
  sectionTitle: PropTypes.string,
  removeSection: PropTypes.func,
};

export { TableSection };
