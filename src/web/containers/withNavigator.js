import React from 'react';
import { TabRouter, createNavigator } from 'react-navigation';
import { withAll, withUncompleted, withCompleted } from 'shared/hocs/todo';
import TodoScene from 'shared/scenes/TodoScene';

const AllTodos = (props) => (<TodoScene {...props} title='ALL TODO' />);
const CompletedTodos = (props) => (<TodoScene {...props} title='COMPLETED TODO' />);
const UncompletedTodos = (props) => (<TodoScene {...props} title='UNCOMPLETED TODO' />);

export default createNavigator(TabRouter({
    All: {
      screen: withAll(AllTodos),
    },
    Completed: {
      screen: withCompleted(CompletedTodos),
    },
    Uncompleted: {
      screen: withUncompleted(UncompletedTodos),
    },
}));
