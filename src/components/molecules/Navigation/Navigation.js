import React from "react";
import { Link } from "react-router-dom";
/**
 *
 * @return {html} navigation
 */
function Navigation() {
    return (
        <nav>
            <Link
                className="mt-5 ml-5 p-2 rounded bg-sky-500 text-white"
                to="/">
                Home
            </Link>
            <Link
                className="mt-5 ml-5 p-2 rounded bg-sky-500 text-white"
                to="/FormTask">
                Add Task
            </Link>
        </nav>
    );
}

export default Navigation;
