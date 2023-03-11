import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/molecules/Navigation/Navigation";

/**
 *
 * @return {html} 404 page
 */
function Error() {
    return (
        <div className="App">
            <Navigation />
            <div
                className="flex
                 flex-col
                 justify-center
                 min-h-screen
                 items-center">
                <h1
                    className="font-bold
                    text-red-700
                    text-center
                    text-3xl">
                    404 Not found
                </h1>
                <Link
                    className="mt-5 ml-5 p-2 rounded bg-sky-500 text-white"
                    to="/">
                    Return Home
                </Link>
            </div>
        </div>
    );
}

export default Error;
