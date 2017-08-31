import { connect } from 'react-redux';
import withNav from 'shared/selectors/nav';

export default (Component) => connect(
  (state) => ({
    nav: withNav(state),
  }),
)(Component);
