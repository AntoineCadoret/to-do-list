import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

/**
 *
 * @param {*} props
 * @return {html} navigation
 */
function Navigation() {
    const styleLink = (actif) => {
        let style = "mt-5 ml-5 px-4 py-2 rounded bg-sky-500";
        style = style + " text-white hover:bg-sky-700 active:bg-sky-200";
        if (actif) {
            style = style.replace('500', '800');
            console.log(style);
        }
        return style;
    };

    return (
        <nav>
            <NavLink
                className={({isActive})=>styleLink(isActive)}
                to="/"
                end>
                Home
            </NavLink>
            <NavLink
                className={({isActive})=>styleLink(isActive)}
                to="/FormTask"
                end
            >
                Add Task
            </NavLink>
        </nav>
    );
}
Navigation.propTypes = {
    isActive: PropTypes.bool,
};
export default Navigation;
