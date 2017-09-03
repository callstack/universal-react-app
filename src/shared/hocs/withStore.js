import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import todos from 'shared/reducers/todo';
import prepareNavReducer from 'shared/reducers/nav';

export default (Component, Navigator) => {
  const nav = prepareNavReducer(Navigator);
  const reducers = combineReducers({ todos, nav });
  const store = createStore(reducers);
  return (props) =>
    (<Provider store={store}>
      <Component {...props}/>
    </Provider>)
}
