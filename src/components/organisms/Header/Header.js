import React from "react";
import PropTypes from 'prop-types';

const Header = ({ title}, props) => {
    return (
      <header className='page-head'>
        <div className='m-4 flex justify-center'>
            <h1 className="text-3xl font-bold">{title}</h1>
        </div>
      </header>
    );
  };
  Header.propTypes = {
    title: PropTypes.string,
  };
export { Header };
