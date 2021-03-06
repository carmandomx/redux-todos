import axios from "axios";

export const ACTION_TYPES = {
  addTodo: "ADD_TODO",
  addTodoSuccess: "ADD_TODO_SUCCESS",
  addTodoFail: "ADD_TODO_FAIL",
  deleteTodo: "DELETE_TODO",
  deleteTodoSuccess: "DELETE_TODO_SUCCESS",
  deleteTodoFail: "DELETE_TODO_FAIL",
  getTodo: "GET_TODOS",
  getTodoSuccess: "GET_TODOS_SUCCESS",
  getTodoFail: "GET_TODOS_FAIL",
};

// actionCreator
export const addTodo = () => {
  return {
    type: ACTION_TYPES.addTodo,
  };
};

export const addTodoSuccess = (todo) => {
  return {
    type: ACTION_TYPES.addTodoSuccess,
    payload: todo,
  };
};

export const addTodoFail = (err) => {
  return {
    type: ACTION_TYPES.addTodoFail,
    payload: err,
  };
};

// actionCreator
export const deleteTodo = () => {
  return {
    type: ACTION_TYPES.deleteTodo,
  };
};

export const deleteTodoSuccess = (id) => {
  return {
    type: ACTION_TYPES.deleteTodoSuccess,
    payload: id,
  };
};

export const deleteTodoFail = (err) => {
  return {
    type: ACTION_TYPES.deleteTodoFail,
    payload: err,
  };
};

export const getTodos = () => {
  return {
    type: ACTION_TYPES.getTodo,
  };
};

export const GetTodosSuccess = (todos) => {
  return {
    type: ACTION_TYPES.getTodoSuccess,
    payload: todos,
  };
};

export const GetTodosFail = (err) => {
  return {
    type: ACTION_TYPES.getTodoFail,
    payload: err,
  };
};
// thunk getAllTodos
export const getAllTodos = () => {
  return function (dispatch) {
    dispatch(getTodos());
    return axios("https://todos-go.herokuapp.com/api/todos")
      .then((res) => dispatch(GetTodosSuccess(res.data)))
      .catch((err) => dispatch(GetTodosFail(err)));
  };
};

// thunk addTodo
export const addTodoThunk = (todo) => {
  return (dispatch) => {
    dispatch(addTodo());
    return axios
      .post("https://todos-go.herokuapp.com/api/todos", todo)
      .then((res) => dispatch(addTodoSuccess(res.data)))
      .catch((err) => dispatch(addTodoFail(err)));
  };
};

// thunk deleteTodo
export const deleteTodoThunk = (todoId) => {
  return (dispatch) => {
    dispatch(deleteTodo());
    return axios
      .delete(`https://todos-go.herokuapp.com/api/todos/${todoId}`)
      .then(() => dispatch(deleteTodoSuccess(todoId)))
      .catch((err) => dispatch(deleteTodoFail(err)));
  };
};
