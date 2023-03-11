import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/molecules/Navigation/Navigation";

/**
 *
 * @return {html} link the navigation to every page
 */
function Layout() {
    return (
        <>
            <Navigation/>
            <Outlet />
        </>
    );
}

export default Layout;
