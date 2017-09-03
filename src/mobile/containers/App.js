import React from 'react';
import { addNavigationHelpers } from 'react-navigation';
import withStore from 'shared/hocs/withStore';
import withNavState from 'shared/hocs/withNavState';
import Navigator from 'components/Navigator';

const App = ({ dispatch, nav }) =>
  (<Navigator navigation={addNavigationHelpers({ dispatch, state: nav })} />);

export default withStore(withNavState(App), Navigator);
