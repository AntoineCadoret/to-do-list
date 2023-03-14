import React from "react";
import { Header } from "../components/organisms/Header/Header";
import { TableToDo } from "../components/organisms/TableToDo/TableToDo";

/**
 *
 * @return {html} home page
 */
function Home() {
  return (
    <div className="App">
      <Header
        title="My To-Do List"
        isLink
        linkDestination="/FormTask"
        linkName="Add Task"
        />
      <TableToDo/>
    </div>
  );
}

export default Home;
