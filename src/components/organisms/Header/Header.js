import React from "react";
// import { Button } from '../../atoms/Button';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
const Header = ({ title, isLink, linkDestination, linkName}, props) => {
    return (
      <header className='page-head'>
        {isLink &&
          <Link
            className="mt-5 ml-5 p-2 rounded bg-sky-500 text-white"
            to={linkDestination}>
              {linkName}
          </Link>
        }
        <div className='m-4 flex justify-center'>
            <h1 className="text-3xl font-bold">{title}</h1>
        </div>
      </header>
    );
  };
  Header.propTypes = {
    title: PropTypes.string,
    isLink: PropTypes.bool,
    linkDestination: PropTypes.string,
    linkName: PropTypes.string,
};
export { Header };
