import Location from './components/Location/Location';
import React, { useEffect, useState } from 'react';
import Home from './components/Home/Home';
import Loading from './components/Loading';
import NavMenu from './components/NavMenu';
import './App.css';

function App () {
  const [screen, setScreen] = useState(<Loading />);

  useEffect(() => {
    setTimeout(() => {
      setScreen(
      <Home/>,
      <NavMenu />
      );
    }, 5000);
  }, []);

  return (
    <div className="App">
      <Location />
      {screen}
    </div>
  );
}

export default App;
