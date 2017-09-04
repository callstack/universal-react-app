export const add = (text) => ({
  type: 'ADD_TODO',
  text,
});

export const remove = (id) => ({
  type: 'REMOVE_TODO',
  id,
});

export const toggle = (id) => ({
  type: 'TOGGLE_TODO',
  id,
});

export const filter = (filter) => ({
  type: 'FILTER_TODO',
  filter,
});
