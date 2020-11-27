import React from 'react';
import NavMenu from './NavMenu';
import LocationMobile from '../LocationMobile/LocationMobile';

import './Home.css';

class Home extends React.Component {
  state = {
    background: null
  }

  randomBackground = () => {
    const backgrounds = [
      "url('./Assets/painting-3135875_1920.jpg')",
      "url('./Assets/pexels-ann-h-1765033.jpg')",
      "url('./Assets/pexels-madison-inouye-1831234.jpg')",
      "url('./Assets/pexels-moose-photos-1037999.jpg')",
      "url('./Assets/pexels-paula-schmidt-963486.jpg')",
      "url('./Assets/pexels-pixabay-163811.jpg')",
      "url('./Assets/pexels-prateek-katyal-2694434.jpg')",
      "url('./Assets/pexels-santiago-pagnotta-1702624.jpg')",
      "url('./Assets/pexels-steve-johnson-1145720.jpg')",
      "url('./Assets/pexels-steve-johnson-1484759.jpg')",
      "url('./Assets/pexels-toa-heftiba-şinca-1194420.jpg')",
      "url('./Assets/pexels-zaksheuskaya-1568607.jpg')",
      "url('./Assets/pexels-free-creative-stuff-1193743.jpg')",
      "url('./Assets/pexels-giovanni-calia-2733337.jpg')",
      "url('./Assets/pexels-steve-johnson-1509534.jpg')",
      "url('./Assets/pexels-suzy-hazelwood-1629236.jpg')",
      "url('./Assets/pexels-moose-photos-1037993.jpg')",
      "url('./Assets/pexels-scott-webb-311458.jpg')",
      "url('./Assets/pexels-gdtography-911738.jpg')",
      "url('./Assets/pexels-miguel-á-padriñán-1111367.jpg')"
    ];
    const random = Math.floor(Math.random() * backgrounds.length) + 0;

    const style = {
      backgroundImage: backgrounds[random]
    };

    this.setState({ background: style });
  }

  componentDidMount () {
    this.randomBackground();
  }

  render () {
    return (
      <div
        className="home"
        style={ this.state.background }
      >
        <div className="logo">
          <img src="./Assets/Wild_Art_Museums_logo.svg" alt="Wild Art Logo"/>
        </div>
        <div className="menu">
          <NavMenu />
        </div>
        <div className="home-locationMob">
        <LocationMobile />
      </div>
      </div>
    );
  }
}

export default Home;
