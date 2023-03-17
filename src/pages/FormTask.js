import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../components/organisms/Header/Header";
import { Button } from "../components/atoms/Button";
import { useSelector, useDispatch } from 'react-redux';
import { taskAction } from "../store/storage";
import PropTypes from 'prop-types';

/**
 *
 * @param {string} param0
 * @param {string} props
 * @return {html} new or updated task
 */
const FormTask = ({ type }, props) => {
    const sections = useSelector((state) => state.sections.sections);
    const tasks = useSelector((state) => state.task.task);
    let task = "";
    let updateTaskId = 0;

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();

    if (type === 'update') {
        updateTaskId = params.taskId;
        task = tasks[updateTaskId];
    }

    const saveHandler = () => {
        const taskName = document.querySelector(".taskName").value;
        const taskType = document.querySelector(".taskType").value;
        const taskStartDate = document.querySelector(".date-start").value;
        const taskDueDate = document.querySelector(".date-du").value;
        const taskCompletion = document.querySelector(".completion").value;
        let taskId = 0;
        if (type === 'update') {
            taskId = updateTaskId;
        } else {
            taskId = tasks.length;
        }
        const arrTask = {
            id: taskId,
            name: taskName,
            type: taskType,
            startDate: taskStartDate,
            dueDate: taskDueDate,
            completionLevel: taskCompletion,
        };
        if (type === 'update') {
            dispatch(taskAction.updateTask({
                index: task.id,
                newTask: arrTask,
            }));
        } else {
            dispatch(taskAction.addTask(arrTask));
        }
        navigate('/');
    };
    const deleteHandler = () => {
        if (confirm("Are you sure to remove the" + task.name + " task")) {
            dispatch(taskAction.deleteTask(task));
            navigate('/');
        }
    };
    return (
        <div className="App">
            <Header title="Add Tâche" />
            <div className="flex flex-col m-8">
                <label className="m-4">
                    Name :
                    <input
                        type="text"
                        name="taskName"
                        className="taskName m-1 rounded border"
                        defaultValue = {(type === 'update')? task.name : ""}
                    />
                </label>
                <label className="m-4">
                    Type :
                    <select
                        name="taskType"
                        className="taskType m-1 rounded border"
                        defaultValue=
                        {(type === 'update') ? task.type : 'default'}
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
                    Start date :
                    <input
                        type="date"
                        name="date-start"
                        className="date-start m-1 border rounded"
                        defaultValue={(type === 'update') ? task.startDate : ''}
                    />
                </label>
                <label className="m-4">
                    Due date :
                    <input
                        type="date"
                        name="date-du"
                        className="date-du m-1 border rounded"
                        defaultValue={(type === 'update') ? task.dueDate : ''}
                    />
                </label>
                <label className="m-4">
                    Completion Level :
                    <select
                        name="completion"
                        className="completion m-1 rounded border"
                        defaultValue=
                        {(type === 'update') ? task.completionLevel : 'default'}
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
                {(type == 'update') ?
                    <Button
                        value="Delete"
                        buttonStyle="
                        m-4 w-1/4 p-2 rounded bg-red-500 text-white"
                        clickHandle={deleteHandler}
                    /> : ''}
            </div>
        </div>
    );
};
FormTask.propTypes = {
    type: PropTypes.string,
};
export default FormTask;
