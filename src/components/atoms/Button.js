
const Button = ({ clickHandle, value, buttonStyle}, props) => {
  return (
    <button onClick={clickHandle} className={buttonStyle}>
      {value}
    </button>
  );
};

export { Button };