import React from 'react';
import { TabRouter, createNavigator } from 'react-navigation';
import routes from 'shared/config/routes';
import withStore from 'shared/hocs/withStore';
import withNavState from 'shared/hocs/withNavState';
import Navigation from 'components/Navigation';

const routeNames = Object.keys(routes);

const App = ({ dispatch, router, nav }) => {
  const ScreenView = router.getComponentForRouteName(nav.routes[nav.index].routeName);
  return (
    <div>
      <Navigation
        navigateTo={(routeName) => {
          dispatch(router.getActionForPathAndParams(routeName));
        }}
        routes={routeNames} />
      <ScreenView />
    </div>
  )
}

const Navigator = createNavigator(TabRouter(routes))(App);
const AppWithNavigation = withNavState(Navigator);
export default withStore(AppWithNavigation, Navigator);
