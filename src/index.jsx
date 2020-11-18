import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import ThemeContext from './contexts/ThemeContext';
import './index.css';
import App from './App';

ReactDOM.render(
  <ThemeContext>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </ThemeContext>,
  document.getElementById('root')
);
