import React, { useEffect, useState } from 'react';
import Router from './Router';
import Loading from './components/Home/Loading';
import './App.css';

function App () {
  const [screen, setScreen] = useState(<Loading />);

  useEffect(() => {
    setTimeout(() => {
      setScreen(
      <Router/>
      );
    }, 5000);
  }, []);

  return (
    <div className="App">
      {screen}
    </div>
  );
}

export default App;
