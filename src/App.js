import { useDispatch, useSelector } from "react-redux";
import TodoContainer from "./components/TodoContainer";

import "./App.css";

function App() {
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div>
        <h1>Contador</h1>
        <span>Le he dado click: {counter} veces</span>
        <button
          onClick={() =>
            dispatch({
              type: "INCREMENT",
            })
          }
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch({
              type: "DECREMENT",
            });
          }}
        >
          -
        </button>
      </div>
      <div>
        <h1>Todos</h1>
        <TodoContainer />
      </div>
    </div>
  );
}

export default App;
