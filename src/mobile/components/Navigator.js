import React from 'react';
import { withCompleted, withUncompleted, withAll } from 'shared/hocs/todo';
import TodoScene from 'shared/scenes/TodoScene';
import { TabNavigator } from 'react-navigation';

const AllTodos = (props) => <TodoScene {...props} title='ALL TODO' />;
const CompletedTodos = (props) => <TodoScene {...props} title='COMPLETED TODO' />;
const UncompletedTodos = (props) => <TodoScene {...props} title='UNCOMPLETED TODO' />;

export default TabNavigator({
  All: {
    screen: withAll(AllTodos),
  },
  Completed: {
    screen: withCompleted(CompletedTodos),
  },
  Uncompleted: {
    screen: withUncompleted(UncompletedTodos),
  },
}, {
  tabBarOptions: {
    labelStyle: {
      fontSize: 14,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  swipeEnabled: true,
});
