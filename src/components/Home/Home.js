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
      "url('./Assets/pexels-madison-inouye-1831234.jpg')"
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
        <div className="menu">
          <NavMenu />
        </div>
      </div>
    );
  }
}

export default Home;
