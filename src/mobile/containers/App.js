import React from 'react';
import withStore from 'shared/hocs/withStore';
import { withAll } from 'shared/hocs/todo';
import TodoScene from 'shared/scenes/TodoScene';

const App = (props) => (<TodoScene {...props} title='TODO APP' />);

export default withStore(withAll(App));
