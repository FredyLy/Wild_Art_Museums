import React, { useEffect, useState, useContext } from 'react';
import Router from './Router';
import Loading from './components/Home/Loading';
import { theme } from './components/Darkmode/Theme';
import { ThemeContext } from './contexts/ThemeContext';

import './App.css';

const getStyles = (mode) => ({
  app: {
    height: '100%',
    width: '100%',
    backgroundColor: theme[mode].backgroundColor,
    color: theme[mode].color
  }
});

function App () {
  const [screen, setScreen] = useState(<Loading />);
  const { mode } = useContext(ThemeContext);
  const styles = getStyles(mode);

  useEffect(() => {
    setTimeout(() => {
      setScreen(
      <Router/>
      );
    }, 3000);
  }, []);

  return (
    <div className='App' style={styles.app}>
      {screen}
    </div>
  );
}

export default App;
