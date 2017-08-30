let id = 0;
export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO': {
      return [...state, { text: action.text, id: id++ } ];
    }
    case 'REMOVE_TODO': {
      return state.filter((todo) => todo.id !== action.id);
    }
    case 'TOGGLE_TODO': {
      return state.map((todo) =>
        action.id === todo.id ?
        ({ ...todo, completed: !todo.completed }) :
        todo
      );
    }
    default: {
      return state;
    }
  }
}
