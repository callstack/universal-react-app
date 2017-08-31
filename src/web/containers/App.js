import React, { Component } from 'react';
import withStore from 'shared/hocs/withStore';
import withNavState from 'shared/hocs/withNavState';
import withNavigator from 'containers/withNavigator';
import Navigation from 'components/Navigation';

const routes = [ 'All', 'Completed', 'Uncompleted'];

class App extends Component {
  navigateTo = (routeName) => {
    const action = this.props.router.getActionForPathAndParams(routeName);
    this.props.dispatch(action);
  }

  render() {
    const { router, nav } = this.props;
    const ScreenView = router.getComponentForRouteName(nav.routes[nav.index].routeName);
    return (
      <div>
        <Navigation navigateTo={this.navigateTo} routes={routes} />
        <ScreenView />
      </div>
    )
  }
}

const Navigator = withNavigator(App);

const AppWithNavigation = withNavState(Navigator);

export default withStore(AppWithNavigation, Navigator);
