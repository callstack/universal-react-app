import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import withStore from 'shared/hocs/withStore';
import TodoScene from 'shared/scenes/TodoScene';

const App = withStore(TodoScene);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
