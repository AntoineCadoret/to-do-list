import React from "react";
import { Header } from "../components/organisms/Header/Header";
import { Button } from "../components/atoms/Button";
import { useSelector, useDispatch } from 'react-redux';
import { taskAction } from "../store/storage";
/**
 *
 * @return {html} task creation and update page
 */
function FormTask() {
    const sections = useSelector((state) => state.sections.sections);
    const tasks = useSelector((state) => state.task.task);

    const dispatch = useDispatch();
    const saveHandler = () => {
        const taskName = document.querySelector(".taskName").value;
        const taskType = document.querySelector(".taskType").value;
        const taskDate = document.querySelector(".date-du").value;
        const taskCompletion = document.querySelector(".completion").value;
        const taskId = tasks.length;
        const arrTask = {
            id: taskId,
            name: taskName,
            type: taskType,
            dueDate: taskDate,
            completionLevel: taskCompletion,
        };
        dispatch(taskAction.addTask(arrTask));
    };
    return (
        <div className="App">
            <Header title="Add Tâche"/>
            <div className="flex flex-col m-8">
                <label className="m-4">
                    Name :
                    <input
                        type="text"
                        name="taskName"
                        className="taskName m-1 rounded border"
                    />
                </label>
                <label className="m-4">
                    Type :
                    <select
                        name="taskType"
                        className="taskType m-1 rounded border"
                        defaultValue='default'
                    >
                        <option value="default">
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
                        className="date-du m-1 border rounded"
                    />
                </label>
                <label className="m-4">
                    Completion Level :
                    <select
                        name="completion"
                        className="completion m-1 rounded border"
                        defaultValue='default'
                    >
                        <option value="default">
                            Choose a completion level
                        </option>
                        {sections.map((sectionName, index) => (
                            <option
                                key={`${sectionName}_index_${index}`}
                                value={sectionName}
                            >
                                {sectionName}
                            </option>
                        ))}
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
