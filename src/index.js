import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

import App from './App';

import registerServiceWorker from './registerServiceWorker';

// https://reacttraining.com/react-router/web/guides/basic-components
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();
