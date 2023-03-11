import React from "react";
import { Button } from "../../atoms/Button";
import PropTypes from 'prop-types';

const AddSection = ({addNewSection}, props) => {
  return (
    <div className="addSection m-3 flex gap-4 justify-center">
      <input
        type="text"
        name="newSection"
        className="newSection border rounded"
      />
      <Button
        value="Add the section"
        buttonStyle="p-2 rounded bg-sky-500 text-white"
        clickHandle={addNewSection}
      />
    </div>
  );
};
AddSection.propTypes = {
  addNewSection: PropTypes.func,
};
export { AddSection };
