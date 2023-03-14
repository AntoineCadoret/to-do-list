import React from 'react';
import { Button } from "../../atoms/Button";
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { sectionAction } from "../../../store/storage";

const TableSection = ({ sectionTitle }, props) => {
  const dispatch = useDispatch();
  const removeSectionHandler = () => {
      const title = sectionTitle;
      dispatch(sectionAction.removeSection(title));
  };
  return (
    <div className="rounded w-1/6 bg-slate-300">
      <Button
        buttonStyle='bg-red-500 float-right p-2'
        value='Remove'
        clickHandle={removeSectionHandler}
      />
      <h2>{sectionTitle}</h2>
    </div>
  );
};

TableSection.propTypes = {
  sectionTitle: PropTypes.string,
  removeSection: PropTypes.func,
};

export { TableSection };
