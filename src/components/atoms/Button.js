
const Button = ({ clickHandle, value,style}, props) => {
  return (
    <button onClick={clickHandle} className={style}>
      {value}
    </button>
  );
};

export { Button };