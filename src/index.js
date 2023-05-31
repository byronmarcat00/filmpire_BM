import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min.js';
import App from './components/App.jsx';

ReactDOM.render(
    <BrowserRouter>

    <App />
    </BrowserRouter>
  ,
  document.getElementById('root')
);