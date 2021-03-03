import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import todoReducer from "./todosReducer";

export default combineReducers({
  counter: counterReducer,
  todos: todoReducer,
});
