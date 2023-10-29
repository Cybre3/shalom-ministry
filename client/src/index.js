import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import './index.css';
import 'font-awesome/css/font-awesome.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  ['development', 'test'].includes(process.env.NODE_ENV) ? (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  ) : (
    <App />
  )
);
