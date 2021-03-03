import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoContainer = () => {
  const [todoItem, setTodoItem] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  return (
    <div>
      <div>
        <input value={todoItem} onChange={(e) => setTodoItem(e.target.value)} />
        <button
          onClick={() =>
            dispatch({
              type: "ADD_TODO",
              payload: todoItem,
            })
          }
        >
          Add task
        </button>
      </div>
      {todos.map((todo, index) => (
        <TodoItem task={todo} key={index} />
      ))}
    </div>
  );
};

export default TodoContainer;
