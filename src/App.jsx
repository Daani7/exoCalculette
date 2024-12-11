import './App.css';
import Result from "./component/Result";
import Buttons from "./component/Buttons";
import NumberButtons from "./component/NumberButtons";
import { useReducer } from "react";

const initialState = {
  display: "",
  operation: null,
  previous: null,
  error: ""
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_NUMBER":
      return { ...state, display: state.display + action.payload };

    case "SET_OPERATOR":
      if (!state.display) {
        return { ...state, error: "Saisissez un nombre d'abord." };
      }
      return {
        ...state,
        previous: state.display,
        operation: action.payload,
        display: "",
        error: ""
      };

    case "CALCULATE":
      const prev = parseFloat(state.previous);
      const current = parseFloat(state.display);
      if (!state.operation || isNaN(prev) || isNaN(current)) {
        return { ...state, error: "Opération invalide.", display: "" };
      }
      let result = 0;
      switch (state.operation) {
        case "+":
          result = prev + current;
          break;
        case "-":
          result = prev - current;
          break;
        case "*":
          result = prev * current;
          break;
        default:
          return state;
      }
      return { display: result.toString(), operation: null, previous: null, error: "" };

    case "RESET":
      return initialState;

    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="calculator">
      <Result result={state.display || "0"} message={state.error} />
      <NumberButtons dispatch={dispatch} /> {/* Boutons numériques */}
      <Buttons dispatch={dispatch} /> {/* Boutons opérateurs */}
    </div>
  );
}

export default App;
