import React from "react";
import { useSelector } from "react-redux";

const TodoItem = ({ task }) => {
  const counter = useSelector((state) => state.counter.counter);
  return (
    <div>
      {task} - Estado contador: {counter}
    </div>
  );
};

export default TodoItem;
