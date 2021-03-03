const INITIAL_STATE = {
  todos: ["esta es una tarea"],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    default:
      return state;
  }
};

export default reducer;
