const initialState = {
  todos: [],
  filter: 'All',
};

let id = 0;
export default (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TODO': {
      return {
        ...state,
        todos: [...state.todos, { text: action.text, id: id++ }],
      };
    }
    case 'REMOVE_TODO': {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      }
    }
    case 'TOGGLE_TODO': {
      return {
        ...state,
        todos: state.todos.map((todo) =>
          action.id === todo.id ?
          ({ ...todo, completed: !todo.completed }) :
          todo
        ),
      }
    }
    case 'FILTER_TODO': {
      return {
        ...state,
        filter: action.filter,
      }
    }
    default: {
      return state;
    }
  }
}
