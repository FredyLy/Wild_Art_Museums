import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import ThemeProvider from './contexts/ThemeContext';
import './index.css';
import App from './App';

ReactDOM.render(
  <ThemeProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);
