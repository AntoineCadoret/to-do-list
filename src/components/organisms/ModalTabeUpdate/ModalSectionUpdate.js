import React from "react";
import { Button } from "../../atoms/Button";
import classes from "./ModalSectionUpdate.module.css";
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { sectionAction } from "../../../store/storage";

const ModalSectionUpdate = ({ modifType, title, closeHandler }, props) => {
    const dispatch = useDispatch();
    const updateHandle = () => {
        const insertTitle = document.querySelector('.sectionName').value;
        if (modifType === 'update') {
            const arrTitles = { oldTitle: title, newTitle: insertTitle };
            dispatch(sectionAction.updateSection(arrTitles));
        } else {
            dispatch(sectionAction.addSection(insertTitle));
        }
        closeHandler();
    };
    return (
        <>
            <div className={classes.backdrop} onClick={closeHandler} />
            <div className={classes.modal}>
                <header className={classes.header}>
                    {(modifType === "update") ?
                        <h2>Update the {title} section</h2> :
                        <h2>Add a section</h2>}
                </header>
                <div className={classes.content}>
                    <label>
                        Section name :
                        <input
                            type="text"
                            name="sectionName"
                            className="sectionName border rounded m-2"
                            defaultValue={(modifType === "update") ? title : ''}
                        />
                    </label>
                    <Button
                        value={(modifType === "update") ? 'Update' : 'Add'}
                        clickHandle={updateHandle}
                        buttonStyle="bg-sky-500 rounded m-3 p-2 text-white"
                    />
                </div>
            </div>
        </>
    );
};
ModalSectionUpdate.propTypes = {
    title: PropTypes.string,
    modifType: PropTypes.string,
    closeHandler: PropTypes.func,
};

export default ModalSectionUpdate;
