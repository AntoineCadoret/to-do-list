import React from "react";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Settings from '../../../image/settings.svg';

const TaskCard = ({ id }, props) => {
    const tasks = useSelector((state) => state.task.task);
    console.log(tasks);
    const taskAfficher = tasks[id];
    let styleCard = "";
    switch (taskAfficher.type) {
        case "Urgent":
            styleCard = "bg-red-500 rounded p-5 m-3";
            break;
        case "Chores":
            styleCard = "bg-green-500 rounded p-5 m-3";
            break;
        case "Professionnal":
            styleCard = "bg-purple-500 rounded p-5 m-3";
            break;
        case "Financial":
            styleCard = "bg-blue-500 rounded p-5 m-3";
            break;
    }
    return (
        <div className={styleCard}>
            <div className="flex justify-between">
                <p className="float-left">{taskAfficher.dueDate}</p>
                <Link to={"/FormTask/"+taskAfficher.id}>
                    <img src={Settings} alt="settings icon" />
                </Link>
            </div>
            <h2>{taskAfficher.name}</h2>
            <p>{taskAfficher.type}</p>
        </div>
    );
};
TaskCard.propTypes = {
  id: PropTypes.string,
};

export default TaskCard;
