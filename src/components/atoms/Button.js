import React from "react";
import PropTypes from 'prop-types';

const Button = ({ clickHandle, value, buttonStyle}, props) => {
  return (
    <button onClick={clickHandle} className={buttonStyle}>
      {value}
    </button>
  );
};
Button.propTypes = {
  clickHandle: PropTypes.func,
  value: PropTypes.string,
  buttonStyle: PropTypes.string,
};
export { Button };
