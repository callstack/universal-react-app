import { connect } from 'react-redux';
import { getUncompleted } from 'shared/selectors/todo';

export default (Component) => connect(
  (state) => ({
    todos: getUncompleted(state),
  })
)(Component);
