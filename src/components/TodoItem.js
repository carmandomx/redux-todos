import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodoThunk } from "../actions/todoActions";

const TodoItem = ({ task, id }) => {
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();
  return (
    <div>
      {task} - Estado contador: {counter} -{" "}
      <button onClick={() => dispatch(deleteTodoThunk(id))}>X</button>
    </div>
  );
};

export default TodoItem;
