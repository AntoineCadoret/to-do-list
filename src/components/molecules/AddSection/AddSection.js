import { Button } from "../../atoms/Button";

const AddSection = (props) => {
  return (
    <div className="flex justify-around">
      <input type="text" name="newSection" className="newSection border" />
      <Button
        value="Add the section"
        buttonStyle="p-2 rounded bg-sky-500 text-white"
        clickHandle={props.addNewSection}
      />
    </div>
  );
};

export { AddSection };
