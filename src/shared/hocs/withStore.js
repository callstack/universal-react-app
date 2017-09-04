import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import todo from 'shared/reducers/todo';

export default (Component) => {
  const reducers = combineReducers({ todo });
  const store = createStore(reducers);
  return (props) =>
    (<Provider store={store}>
      <Component {...props}/>
    </Provider>)
}
