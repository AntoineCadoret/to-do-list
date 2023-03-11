import React, { useEffect, useState } from "react";
import { Header } from "../components/organisms/Header/Header";
import { TableToDo } from "../components/organisms/TableToDo/TableToDo";
import { AddSection } from "../components/molecules/AddSection/AddSection";

const Home = ({ title, isButton, buttonValue }, props) => {
  const [sections, setSections] = useState(new Array());
  let tableSection = [...sections];
  
  const addSectionTable = () => {
    tableSection.push(document.querySelector(".newSection").value);
    setSections(tableSection);
  };

  useEffect(() => {
    document.title = `You clicked ${sections} times`;
    console.log("useEffect");
  }, [tableSection, sections]);
  return (
    <div className="App">
      <Header title="My To-Do List" isButton buttonValue="Add a task" />
      {sections && <TableToDo key={sections} sections={sections} />}

      <AddSection addNewSection={() => addSectionTable()} />
    </div>
  );
};

export { Home };
