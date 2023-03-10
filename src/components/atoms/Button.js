
const Button = ({ clickHandle, children}, props) => {
  return (
    <button onClick={clickHandle} className='bg-sky-500 text-white'>
      {children}
    </button>
  );
};

export { Button };