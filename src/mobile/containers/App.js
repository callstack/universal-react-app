import React from 'react';
import { addNavigationHelpers } from 'react-navigation';
import withStore from 'shared/hocs/withStore';
import withNav from 'shared/hocs/withNavState';
import Navigator from 'components/Navigator';

const App = ({ dispatch, nav }) =>
  (<Navigator navigation={addNavigationHelpers({ dispatch, state: nav })} />);

export default withStore(withNav(App), Navigator);
