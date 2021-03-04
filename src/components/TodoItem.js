import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../actions/todoActions";

const TodoItem = ({ task }) => {
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();
  return (
    <div>
      {task} - Estado contador: {counter} -{" "}
      <button onClick={() => dispatch(deleteTodo(task))}>X</button>
    </div>
  );
};

export default TodoItem;
