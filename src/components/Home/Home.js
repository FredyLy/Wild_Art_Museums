import React from 'react';
import './Home.css';
import NavMenu from './NavMenu';

class Home extends React.Component {
  state = {
    background: null
  }

  randomBackground = () => {
    console.log('test');
    const backgrounds = [
      "url('./Assets/painting-3135875_1920.jpg')",
      "url('./Assets/pexels-ann-h-1765033.jpg')",
      "url('./Assets/pexels-anni-roenkae-2457284.jpg')",
      "url('./Assets/pexels-madison-inouye-1831234.jpg')",
      "url('./Assets/pexels-moose-photos-1037999.jpg')",
      "url('./Assets/pexels-paula-schmidt-963486.jpg')",
      "url('./Assets/pexels-pixabay-163811.jpg')",
      "url('./Assets/pexels-prateek-katyal-2694434.jpg')",
      "url('./Assets/pexels-santiago-pagnotta-1702624.jpg')",
      "url('./Assets/pexels-stas-knop-2916450.jpg')",
      "url('./Assets/pexels-steve-johnson-1145720.jpg')",
      "url('./Assets/pexels-steve-johnson-1484759.jpg')",
      "url('./Assets/pexels-toa-heftiba-şinca-1194420.jpg')",
      "url('./Assets/pexels-zaksheuskaya-1568607.jpg')"
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
    console.log(this.state.background);
    return (
      <div
        className="home"
        style={ this.state.background }
      >
        <div className="logo">
          <img src="./Assets/logo_V4.svg" alt="Wild Art Logo"/>
        </div>
        <div className="menu">
          <NavMenu />
        </div>
      </div>
    );
  }
}

export default Home;
