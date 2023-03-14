import React from "react";
import { Button } from "../../atoms/Button";
import { useDispatch } from 'react-redux';
import { sectionAction } from "../../../store/storage";

const AddSection = (props) => {
  const dispatch = useDispatch();
  const addNewSection = () => {
    const title = document.querySelector(".newSection").value;
    dispatch(sectionAction.addSection(title));
  };
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
export { AddSection };
