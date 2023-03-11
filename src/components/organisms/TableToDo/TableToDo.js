import React from 'react';
import { TableSection } from "../../molecules/TableSection/TableSection";
import PropTypes from 'prop-types';

const TableToDo = ({ sections, removeOneSection }, props) => {
  // console.log(sections, 'sexion');
  const removeSectionHandler = (sectionTitle) => {
    removeOneSection(sectionTitle);
  };
  return (
    <div className="flex justify-around  gap-4">
      {sections.map((sectionName, index) => (
        <TableSection
          key={`${sectionName}_index_${index}`}
          sectionTitle={sectionName}
          removeSection={removeSectionHandler}
        />
      ))}
    </div>
  );
};
TableToDo.propTypes = {
  sections: PropTypes.array,
  removeOneSection: PropTypes.func,
};

export { TableToDo };
