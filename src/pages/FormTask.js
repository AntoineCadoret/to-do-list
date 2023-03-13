import React from "react";
import { Header } from "../components/organisms/Header/Header";
import { Button } from "../components/atoms/Button";
/**
 *
 * @return {html} task creation and update page
 */
function FormTask() {
    const saveHandler = () => {
        const arrTask = [];
        return arrTask;
    };
    return (
        <div className="App">
            <Header title="Add Tâche"/>
            <div className="flex flex-col m-8">
                <label className="m-4">
                    Name :
                    <input
                        type="text"
                        name="nomTache"
                        className="m-1 rounded border"
                    />
                </label>
                <label className="m-4">
                    Type :
                    <select
                        name="taskType"
                        className="m-1 rounded border"
                    >
                        <option selected
                            value="default">
                            Choose a type of task
                        </option>
                        <option value="Chores">Chores</option>
                        <option value="Professionnal">Professionnal</option>
                        <option value="Urgent">Urgent</option>
                        <option value="Financial">Financial</option>
                    </select>
                </label>
                <label className="m-4">
                    Due date :
                    <input
                        type="date"
                        name="date-du"
                        className="m-1 border rounded"
                    />
                </label>
                <label className="m-4">
                    Completion Level :
                    <select
                        name="completion"
                        className="m-1 rounded border"
                    >
                        <option
                            selected
                            value="default"
                        >
                            Choose a completion level
                        </option>
                        <option>value</option>
                    </select>
                </label>
                <Button
                    value="Save"
                    buttonStyle="m-4 w-1/4 p-2 rounded bg-sky-500 text-white"
                    clickHandle={saveHandler}
                />
            </div>
        </div>
    );
}

export default FormTask;
