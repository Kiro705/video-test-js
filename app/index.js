import '../assets/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Main from './main.jsx';
import store from './store.jsx';

ReactDOM.render(
  /* jshint ignore:start */
  <Provider store={store}>
    <Main />
  </Provider>,
  /* jshint ignore:end */
  document.getElementById('main')
);
