import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.js';
import 'semantic-ui-css/semantic.min.css';
import './main.scss'

import configureStore from './store';
import initialStore from './store/initial-store';

export const store = configureStore(initialStore);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
 document.getElementById('app')
 );