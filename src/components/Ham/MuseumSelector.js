import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Ham.css';

class MuseumSelector extends Component {
  render () {
    return (
        <div className="hamMuseumSelector">
          <button
            id='ShowFogg'
            onClick={this.props.handleChangeTab}
            className={this.props.active === 'ShowFogg' ? 'active' : ''}
          >
            Fogg Museum
          </button>
          <button
            id='ShowBusch'
            onClick={this.props.handleChangeTab}
            className={this.props.active === 'ShowBusch' ? 'active' : ''}
          >
            Busch–Reisinger Museum
          </button>
          <button
            id='ShowSackler'
            onClick={this.props.handleChangeTab}
            className={this.props.active === 'ShowSackler' ? 'active' : ''}
          >
            Arthur M. Sackler Museum
          </button>
        </div>
    );
  }
}

MuseumSelector.propTypes = {
  handleChangeTab: PropTypes.string,
  active: PropTypes.string
};

export default MuseumSelector;
