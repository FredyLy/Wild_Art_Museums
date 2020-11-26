import React, { Component } from 'react';

import Fogg from './Fogg';
import Busch from './Busch';
import Sackler from './Sackler';
import Intro from './Intro';
import MuseumSelector from './MuseumSelector';
import LocationMobile from '../LocationMobile/LocationMobile';
import Location from '../Location/Location';
import SocialMedia from './SocialMedia';

import './Ham.css';

class Ham extends Component {
  constructor (props) {
    super(props);
    this.state = {
      activeId: 'ShowFogg',
      title: 'HARVARD ART MUSEUMS'
    };
    this.handleChangeTab = this.handleChangeTab.bind(this);
  }

  handleChangeTab (event) {
    const buttonId = event.target.id;
    this.setState({ activeId: buttonId });
  }

  selectComponent () {
    switch (this.state.activeId) {
      case 'ShowFogg':
        return <Fogg />;
      case 'ShowBusch':
        return <Busch />;
      case 'ShowSackler':
        return <Sackler />;
    }
  }

  render () {
    return (
      <div className="overflow">
        <div className="ham-page">
          <div className="hampage">
            <Intro />
              <MuseumSelector
                active={this.state.activeId}
                handleChangeTab={this.handleChangeTab}
              />
            <div>
              {this.selectComponent()}
            </div>
          </div>
        <div className="hamfooter">
          <SocialMedia />
        </div>
      </div>
      <div className="ham-location">
      <Location title={this.state.title} />
      </div>
      <div className="ham-locationMobile">
      <LocationMobile />
      </div>
      </div>
    );
  }
}

export default Ham;
