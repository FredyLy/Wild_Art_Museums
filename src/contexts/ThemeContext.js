import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  ThemeProvider.propTypes = {
    children: PropTypes.any
  };
  const [mode, setTheme] = useState('light');
  return (
    <ThemeContext.Provider
      value={{
        mode,
        setTheme: () => setTheme(mode === 'dark' ? 'light' : 'dark')
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
