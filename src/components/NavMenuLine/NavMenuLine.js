import React, { Component } from 'react';
import NavmenuTheme from '../Darkmode/NavmenuTheme';
import { Link } from 'react-router-dom';
import { FaHome, FaPalette, FaUserFriends } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { MdContactMail } from 'react-icons/md';
import { GiGreekTemple } from 'react-icons/gi';
import { AiOutlinePlus } from 'react-icons/ai';

import './NavMenuLine.css';

class NavMenuLine extends Component {
  state = {
    open: this.props.open
  }

  expandNavMenuLine (open) {
    var i = document.getElementById('navmenuline-menu').childNodes;
    if (open === false) {
      document.getElementById('navmenuline-menu').style.transform = 'scale(1)';
      i[3].style.transform = 'translate(10px, -510px)';
      i[4].style.transform = 'translate(-10px, -425px)';
      i[1].style.transform = 'translate(10px, -340px)';
      i[0].style.transform = 'translate(-10px, -255px)';
      i[5].style.transform = 'translate(10px, -170px)';
      i[2].style.transform = 'translate(-10px, -85px)';
      this.setState({ open: !open });
      this.props.expandLoc(!this.state.open);
    } else {
      document.getElementById('navmenuline-menu').style.transform = 'scale(0.9)';
      i[0].style.transform = 'translateY(0)';
      i[1].style.transform = 'translate(0)';
      i[2].style.transform = 'translate(0)';
      i[3].style.transform = 'translateY(0)';
      i[4].style.transform = 'translate(0)';
      i[5].style.transform = 'translate(0)';
      this.setState({ open: !open });
      this.props.expandLoc(!this.state.open);
    }
  }

  render () {
    return (
      <div>
        <div className="navmenuline-container" onClick={() => this.expandNavMenuLine(this.state.open)}>
          <div className="navmenuline-toggle" id="navmenuline-toggle">
            <i className="navmenuline-react-icons" id="navmenuline-add">
              {this.state.open === true
                ? <AiOutlinePlus style={ { transform: 'rotate(45deg)', transition: '1s' } } />
                : <AiOutlinePlus style={ { transform: 'rotate(0deg)', transition: '1s' } }/>}
            </i>
          </div>
        </div>
        <div className="navmenuline-menu" id="navmenuline-menu">
          <div className="navmenuline-item">
            <Link to='/ham'>
              <i className="navmenuline-react-icons" ><GiGreekTemple className="navmenuline-icons-hover"/></i>
            </Link>
          </div>
          <div className="navmenuline-item">
            <Link to='/aboutus'>
              <i className="navmenuline-react-icons"><FaUserFriends className="navmenuline-icons-hover"/></i>
            </Link>
          </div>
          <div className="navmenuline-item">
            <Link to='/'>
              <i className="navmenu-react-icons"><FaHome className="navmenu-icons-hover"/></i>
            </Link>
          </div>
          <div className="navmenuline-item">
            <a href="#">
              <i className="navmenuline-react-icons"><NavmenuTheme className="navmenuline-icons-hover"/></i>
            </a>
          </div>
          <div className="navmenuline-item">
            <Link to='/contact'>
              <i className="navmenuline-react-icons"><MdContactMail className="navmenuline-icons-hover"/></i>
            </Link>
          </div>
          <div className="navmenuline-item">
            <Link to='/gallery'>
              <i className="navmenuline-react-icons"><FaPalette className="navmenuline-icons-hover"/></i>
            </Link>
          </div>
        </div>
    </div>
    );
  }
}

NavMenuLine.propTypes = {
  expandLoc: PropTypes.string,
  open: PropTypes.bool
};

export default NavMenuLine;
