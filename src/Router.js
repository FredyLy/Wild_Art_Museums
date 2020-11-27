import React from 'react';
import Home from './components/Home/Home.js';
import {
  Switch,
  Route
} from 'react-router-dom';
import Gallery from './components/Gallery/Gallery';
import Ham from './components/Ham/Ham';
import ContactUs from './components/Contact Us/ContactUs';
import AboutUs from './components/DisplayMembers/MemberCards';

const RouterWebSite = () => {
  return (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/ham" component={Ham} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/aboutus" component={AboutUs} />
        </Switch>
  );
};

export default RouterWebSite;
