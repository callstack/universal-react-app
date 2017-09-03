import { TabNavigator } from 'react-navigation';
import routes from 'shared/config/routes';

const navigatorConfig = {
  swipeEnabled: true,
  tabBarOptions: {
    labelStyle: {
      fontSize: 14,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
};

export default TabNavigator(routes, navigatorConfig);
