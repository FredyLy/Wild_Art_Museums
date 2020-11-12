import React from 'react';
// import App from './App';
import Home from './components/Home/Home.js';
import {
  Switch,
  Route
} from 'react-router-dom';
import Gallery from './components/Gallery/Gallery';

const RouterWebSite = () => {
  return (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/gallery" component={Gallery} />
        </Switch>
  );
};

export default RouterWebSite;
