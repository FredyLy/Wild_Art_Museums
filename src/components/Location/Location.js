import React, { Component } from 'react';
// import React, { useEffect, useState } from 'react';
import NavMenuLine from '../NavMenuLine/NavMenuLine';

import './Location.css';

const pageTitle = 'GALLERY';

// const Location = () => {
//   const [open, setOpen] = useState();

//   useEffect()
// }

class Location extends Component {
    state = {
      open: false
    }

    expandLocation (open) {
      console.log(open);
      this.setState({ open: open },
        console.log('callback', this.state));
    }

    componentDidUpdate () {
      if (this.state.open === true) {
        console.log('false');
        document.getElementById('location_page-title').style.transform = 'translateY(-400px)';
      } else {
        console.log('true');
        document.getElementById('location_page-title').style.transform = 'translateY(0px)';
      }
    }

    render () {
      console.log(this.state);
      return (
        <div className="bloc">
          <div className='location_container' >
            <div id='location_page-title'>
              <h1>{pageTitle}</h1>
            </div>
            <div
              // onClick={() => this.expandLocation(this.state.open)}
            >
              <NavMenuLine expandLoc={this.expandLocation} open={this.state.open}/>
            </div>
          </div>
        </div>
      );
    }
}

export default Location;
