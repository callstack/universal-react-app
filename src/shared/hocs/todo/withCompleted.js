import { connect } from 'react-redux';
import { getCompleted } from 'shared/selectors/todo';

export default (Component) => connect(
  (state) => ({
    todos: getCompleted(state),
  })
)(Component);
