export const getAll = (state) => state.todos;
export const getCompleted = (state) => getAll(state).filter(({ completed }) => completed);
export const getUncompleted = (state) => getAll(state).filter(({ completed }) => !completed);
