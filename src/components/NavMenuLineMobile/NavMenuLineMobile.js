import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaHome, FaPalette, FaUserFriends } from 'react-icons/fa';
import { MdContactMail } from 'react-icons/md';
import { GiGreekTemple } from 'react-icons/gi';
import { AiOutlinePlus } from 'react-icons/ai';

import './NavMenuLineMobile.css';

class NavMenuLineMobile extends Component {
  state = {
    open: this.props.open
  }

  expandNavMenuLine (open) {
    var i = document.getElementById('navmenulinemobile-menu').childNodes;
    if (open === false) {
      document.getElementById('navmenulinemobile-menu').style.transform = 'scale(1)';
      i[3].style.transform = 'translate(-240px)';
      i[4].style.transform = 'translate(-300px)';
      i[1].style.transform = 'translate(-240px)';
      i[0].style.transform = 'translate(-180px)';
      i[5].style.transform = 'translate(-120px)';
      i[2].style.transform = 'translate(-60px)';
      i[6].style.transform = 'translate(-450px, -10px)';
      this.setState({ open: !open });
      this.props.expandLoc(!this.state.open);
    } else {
      document.getElementById('navmenulinemobile-menu').style.transform = 'scale(0.9)';
      i[0].style.transform = 'translateY(0)';
      i[1].style.transform = 'translate(0)';
      i[2].style.transform = 'translate(0)';
      i[3].style.transform = 'translateY(0)';
      i[4].style.transform = 'translate(0)';
      i[5].style.transform = 'translate(0)';
      i[6].style.transform = 'translate(0px, -10px)';
      this.setState({ open: !open });
      this.props.expandLoc(!this.state.open);
    }
  }

  render () {
    return (
      <div>
        <div className="navmenulinemobile-container" onClick={() => this.expandNavMenuLine(this.state.open)}>
          <div className="navmenulinemobile-toggle" id="navmenulinemobile-toggle">
            <i className="navmenulinemobile-react-icons" id="navmenulinemobile-add">
              {this.state.open === true
                ? <AiOutlinePlus style={ { transform: 'rotate(45deg)', transition: '1s' } } />
                : <AiOutlinePlus style={ { transform: 'rotate(0deg)', transition: '1s' } }/>}
            </i>
          </div>
        </div>
        <div className="navmenulinemobile-menu" id="navmenulinemobile-menu">
          <div className="navmenulinemobile-item">
            <Link to='/ham'>
              <i className="navmenulinemobile-react-icons" ><GiGreekTemple className="navmenulinemobile-icons-hover"/></i>
            </Link>
          </div>
          <div className="navmenulinemobile-item">
            <Link to='/aboutus'>
              <i className="navmenulinemobile-react-icons"><FaUserFriends className="navmenulinemobile-icons-hover"/></i>
            </Link>
          </div>
          <div className="navmenulinemobile-item">
            <Link to='/'>
              <i className="navmenulinemobile-react-icons"><FaHome className="navmenulinemobile-icons-hover"/></i>
            </Link>
          </div>
          <div>
            <a href="#">
            </a>
          </div>
          <div className="navmenulinemobile-item">
            <Link to='/contact'>
              <i className="navmenulinemobile-react-icons"><MdContactMail className="navmenulinemobile-icons-hover"/></i>
            </Link>
          </div>
          <div className="navmenulinemobile-item">
            <Link to='/gallery'>
              <i className="navmenulinemobile-react-icons"><FaPalette className="navmenulinemobile-icons-hover"/></i>
            </Link>
          </div>

          <div className="backgd-navmobile">
            <a>
              <i className="backgd-navmobile"></i>
            </a>
          </div>

        </div>
    </div>
    );
  }
}

NavMenuLineMobile.propTypes = {
  expandLoc: PropTypes.string,
  open: PropTypes.bool
};

export default NavMenuLineMobile;
