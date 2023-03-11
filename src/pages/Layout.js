import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = (props) => {
    return (
        <body>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/FormTask"> Add Task</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </body>
    );
};

export default { Layout };
