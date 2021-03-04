import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../actions/todoActions";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const TodoContainer = () => {
  const dispatch = useDispatch();
  const { isLoading, todos } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getAllTodos());
  }, [dispatch]);
  return (
    <div>
      <div>
        <TodoForm />
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        todos.map((todo, index) => <TodoItem task={todo.task} key={todo.id} />)
      )}
    </div>
  );
};

export default TodoContainer;
