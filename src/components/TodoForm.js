import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addTodoThunk } from "../actions/todoActions";
const TodoForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const err = useSelector((state) => state.todos.err);
  const onSubmit = (data) => {
    dispatch(addTodoThunk(data));
  };
  return (
    <>
      {err && (
        <p>
          {Object.keys(err.errors).map((key) => (
            <span>
              {" "}
              {key}:{err.errors[key]}{" "}
            </span>
          ))}
        </p>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="task" type="text" placeholder="Task" ref={register} />
        <input
          name="student"
          type="text"
          placeholder="Student"
          ref={register}
        />
        <button>Create Todo</button>
      </form>
    </>
  );
};

export default TodoForm;
