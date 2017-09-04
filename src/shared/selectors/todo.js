const getAll = (state) => state.todo.todos;
const getCompleted = (state) => getAll(state).filter(({ completed }) => completed);
const getUncompleted = (state) => getAll(state).filter(({ completed }) => !completed);
export const getFiltered = (state) => {
  switch (state.todo.filter) {
    case 'Completed': {
      return getCompleted(state);
    }
    case 'Uncompleted': {
      return getUncompleted(state);
    }
    default: {
      return getAll(state);
    }
  }
};
