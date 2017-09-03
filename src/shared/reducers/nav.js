export default ({ router }) => {
  const firstAction = router.getActionForPathAndParams('All');
  const initialState = router.getStateForAction(firstAction);
  return (state = initialState, action) => router.getStateForAction(action, state) || state;
};
