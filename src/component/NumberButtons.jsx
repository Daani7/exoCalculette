const NumberButtons = ({ dispatch }) => {
  return (
    <div className="numbers">
      <button onClick={() => dispatch({ type: "ADD_NUMBER", payload: "0" })}>0</button>
      <button onClick={() => dispatch({ type: "ADD_NUMBER", payload: "1" })}>1</button>
      <button onClick={() => dispatch({ type: "ADD_NUMBER", payload: "2" })}>2</button>
      <button onClick={() => dispatch({ type: "ADD_NUMBER", payload: "3" })}>3</button>
      <button onClick={() => dispatch({ type: "ADD_NUMBER", payload: "4" })}>4</button>
      <button onClick={() => dispatch({ type: "ADD_NUMBER", payload: "5" })}>5</button>
      <button onClick={() => dispatch({ type: "ADD_NUMBER", payload: "6" })}>6</button>
      <button onClick={() => dispatch({ type: "ADD_NUMBER", payload: "7" })}>7</button>
      <button onClick={() => dispatch({ type: "ADD_NUMBER", payload: "8" })}>8</button>
      <button onClick={() => dispatch({ type: "ADD_NUMBER", payload: "9" })}>9</button>
    </div>
  );
};

export default NumberButtons;
