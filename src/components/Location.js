import React, { Component } from 'react';

import './Location.css';

const pageTitle = 'GALLERY';

class Location extends Component {
    state = {
      open: false
    }

    expand (open) {
      if (open === false) {
        document.getElementById('location_page-title').style.transform = 'translateY(-400px)';
        this.setState({ open: !open });
      } else {
        document.getElementById('location_page-title').style.transform = 'translateY(0px)';
        this.setState({ open: !open });
      }
    }

    render () {
      return (
        <div className="bloc">
          <div className='location_container' >
            <div id='location_page-title'>
              <h1>{pageTitle}</h1>
            </div>
            <div onClick={() => this.expand(this.state.open)}>
            </div>
          </div>
        </div>
      );
    }
}

export default Location;
