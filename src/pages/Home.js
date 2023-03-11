import React, { useEffect, useState } from "react";
import { Header } from "../components/organisms/Header/Header";
import { TableToDo } from "../components/organisms/TableToDo/TableToDo";
import { AddSection } from "../components/molecules/AddSection/AddSection";

/**
 *
 * @return {html} home page
 */
function Home() {
  const [sections, setSections] = useState(['Backlog', 'On Going', 'Finish']);
  const tableSection = [...sections];

  const addSectionTable = () => {
    tableSection.push(document.querySelector(".newSection").value);
    setSections(tableSection);
  };
  const removeSection = (sectionTitle) => {
    const index = tableSection.indexOf(sectionTitle);
    tableSection.splice(index, 1);
    console.log(tableSection);
    setSections(tableSection);
  };
  useEffect(() => {
    console.log("useEffect");
  }, [tableSection, sections]);
  return (
    <div className="App">
      <Header
        title="My To-Do List"
        isLink
        linkDestination="/FormTask"
        linkName="Add Task"
      />
      {sections && <TableToDo
        key={sections}
        sections={sections}
        removeOneSection={removeSection}
      />}

      <AddSection addNewSection={() => addSectionTable()} />
    </div>
  );
}

export default Home;
