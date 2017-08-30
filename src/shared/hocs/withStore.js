import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import todos from 'shared/reducers/todo';

export default (Component) => {
  const reducers = combineReducers({ todos });
  const store = createStore(reducers);
  return (props) =>
    (<Provider store={store}>
      <Component {...props}/>
    </Provider>)
}
