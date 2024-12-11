const Buttons = ({ dispatch }) => {
  return (
    <div className="operators">
      <button onClick={() => dispatch({ type: "SET_OPERATOR", payload: "+" })}>+</button>
      <button onClick={() => dispatch({ type: "SET_OPERATOR", payload: "-" })}>-</button>
      <button onClick={() => dispatch({ type: "SET_OPERATOR", payload: "*" })}>x</button>
      <button onClick={() => dispatch({ type: "CALCULATE" })}>=</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
};

export default Buttons;
