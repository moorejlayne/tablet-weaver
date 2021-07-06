import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TabletWeaver from './TabletWeaver';
import { Provider } from 'react-redux';
import store from './store'

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <TabletWeaver />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);