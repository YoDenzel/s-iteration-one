import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { App } from './app/App';
import { BrowserRouter } from 'react-router-dom';
import './fonts/Roboto/Roboto-Black.ttf';
import './fonts/Roboto/Roboto-Bold.ttf';
import './fonts/Roboto/Roboto-Light.ttf';
import './fonts/Roboto/Roboto-Medium.ttf';
import './fonts/Roboto/Roboto-Regular.ttf';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
