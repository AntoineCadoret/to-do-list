import React, { useState } from 'react';
import { Button } from "../../atoms/Button";
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { sectionAction } from "../../../store/storage";
import ModalSectionUpdate from
  '../../organisms/ModalTabeUpdate/ModalSectionUpdate';

const TableSection = ({ sectionTitle }, props) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const dispatch = useDispatch();

  const updateSectionHandler = () => {
    setIsUpdating(true);
  };
  const closeModal = () => {
    setIsUpdating(false);
  };
  const removeSectionHandler = () => {
      const title = sectionTitle;
      dispatch(sectionAction.removeSection(title));
  };
  return (
    <>
      {isUpdating &&
        <ModalSectionUpdate
          title={sectionTitle}
          closeHandler={closeModal}
          modifType = 'update'
        />}
      <div className="rounded w-1/6 bg-slate-300">
        <Button
          buttonStyle='bg-red-500 float-right p-2'
          value='Remove'
          clickHandle={removeSectionHandler}
        />
        <Button
          buttonStyle='bg-sky-500 float-right p-2 hover:bg-sky-700'
          value='Update'
          clickHandle={updateSectionHandler}
        />
        <h2>{sectionTitle}</h2>
      </div>
    </>
  );
};

TableSection.propTypes = {
  sectionTitle: PropTypes.string,
  removeSection: PropTypes.func,
};

export { TableSection };
