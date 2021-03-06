import { ACTION_TYPES } from "../actions/todoActions";

const INITIAL_STATE = {
  isLoading: false,
  todos: [],
  err: null,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPES.addTodo:
      return {
        ...state,
        isLoading: true,
        err: null,
      };

    case ACTION_TYPES.addTodoSuccess:
      return {
        ...state,
        isLoading: false,
        todos: [...state.todos, action.payload],
      };

    case ACTION_TYPES.addTodoFail:
      return {
        ...state,
        isLoading: false,
        err: action.payload.response.data,
      };

    case ACTION_TYPES.deleteTodo:
      return {
        ...state,
        isLoading: true,
      };

    case ACTION_TYPES.deleteTodoSuccess:
      return {
        ...state,
        isLoading: false,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case ACTION_TYPES.deleteTodoFail:
      return {
        ...state,
        isLoading: false,
        err: action.payload.response.data,
      };

    case ACTION_TYPES.getTodo:
      return {
        ...state,
        isLoading: true,
      };

    case ACTION_TYPES.getTodoSuccess:
      return {
        ...state,
        isLoading: false,
        todos: action.payload.todos,
      };

    case ACTION_TYPES.getTodoFailure:
      return {
        ...state,
        isLoading: false,
        err: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
