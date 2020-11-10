import React, { useEffect, useState } from 'react';
import Home from './components/Home/Home';
import Loading from './components/Home/Loading';
import './App.css';

function App () {
  const [screen, setScreen] = useState(<Loading />);

  useEffect(() => {
    setTimeout(() => {
      setScreen(<Home/>);
    }, 5000);
  }, []);

  return (
    <div className="App">
      {screen}
    </div>
  );
}

export default App;
