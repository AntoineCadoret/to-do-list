import React from 'react';
import { TableSection } from "../../molecules/TableSection/TableSection";
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const TableToDo = () => {
  // console.log(sections, 'sexion');
  const sectionTable = useSelector((state) => state.sections.sections);
  console.log(sectionTable);
  return (
    <div className="flex justify-around  gap-4">
      {sectionTable.map((sectionName, index) => (
        <TableSection
          key={`${sectionName}_index_${index}`}
          sectionTitle={sectionName}
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
