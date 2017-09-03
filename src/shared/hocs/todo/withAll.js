import { connect } from 'react-redux';
import { getAll } from 'shared/selectors/todo';

export default (Component) => connect(
  (state) => ({
    todos: getAll(state),
  }),
)(Component);
