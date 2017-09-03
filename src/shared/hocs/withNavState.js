import { connect } from 'react-redux';
import getNav from 'shared/selectors/nav';

export default (Component) => connect(
  (state) => ({
    nav: getNav(state),
  }),
)(Component);
