export default (navigator) => {
  const initialState = navigator.router.getStateForAction(navigator.router.getActionForPathAndParams('All'));
  return (state = initialState, action) => navigator.router.getStateForAction(action, state) || state;
};
