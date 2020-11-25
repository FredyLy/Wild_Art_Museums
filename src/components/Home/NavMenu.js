import React, { Component } from 'react';
import NavmenuTheme from '../Darkmode/NavmenuTheme';

import { Link } from 'react-router-dom';
import { FaHome, FaPalette, FaUserFriends } from 'react-icons/fa';
import { MdContactMail } from 'react-icons/md';
import { GiGreekTemple } from 'react-icons/gi';
import { AiOutlinePlus } from 'react-icons/ai';

import './NavMenu.css';

class NavMenu extends Component {
  state = {
    open: false
  }

  expand (open) {
    var i = document.getElementById('navmenu-menu').childNodes;
    if (open === false) {
      document.getElementById('navmenu-menu').style.transform = 'scale(1)';
      i[0].style.transform = 'translateY(-120px)';
      i[1].style.transform = 'translate(105px, -60px)';
      i[2].style.transform = 'translate(105px, 60px)';
      i[3].style.transform = 'translateY(120px)';
      i[4].style.transform = 'translate(-105px,60px)';
      i[5].style.transform = 'translate(-105px,-60px)';
      this.setState({ open: !open });
    } else {
      document.getElementById('navmenu-menu').style.transform = 'scale(0.9)';
      i[0].style.transform = 'translateY(0)';
      i[1].style.transform = 'translate(0)';
      i[2].style.transform = 'translate(0)';
      i[3].style.transform = 'translateY(0)';
      i[4].style.transform = 'translate(0)';
      i[5].style.transform = 'translate(0)';
      this.setState({ open: !open });
    }
  }

  render () {
    return (
      <div>
        <div className="navmenu-container" onClick={() => this.expand(this.state.open)}>
          <div className="navmenu-toggle" id="navmenu-toggle">
            <i className="navmenu-react-icons" id="navmenu-add">
              {this.state.open === true ? <AiOutlinePlus style={ { transform: 'rotate(45deg)', transition: '1s' } } /> : <AiOutlinePlus style={ { transform: ['rotate(0deg)'], transition: ['1s'] } }/>}
                </i>
          </div>
        </div>
        <div className="navmenu-menu" id="navmenu-menu">
          <div className="navmenu-item">
              <Link to='/ham'>
              <i className="navmenu-react-icons" ><GiGreekTemple className="navmenu-icons-hover"/></i>
              </Link>
          </div>
          <div className="navmenu-item">
            <Link to='/aboutus'>
              <i className="navmenu-react-icons"><FaUserFriends className="navmenu-icons-hover"/></i>
            </Link>
          </div>
          <div className="navmenu-item">
            <Link to='/'>
              <i className="navmenu-react-icons"><FaHome className="navmenu-icons-hover"/></i>
            </Link>
          </div>
          <div className="navmenu-item">
            <a href="#">
              <i className="navmenu-react-icons-navmenu-theme"><NavmenuTheme /></i>
            </a>
          </div>
          <div className="navmenu-item">
            <Link to='/contact'>
              <i className="navmenu-react-icons"><MdContactMail className="navmenu-icons-hover"/></i>
            </Link>
          </div>
          <div className="navmenu-item">
            <Link to='/gallery'>
              <i className="navmenu-react-icons"><FaPalette className="navmenu-icons-hover"/></i>
            </Link>
          </div>
        </div>
    </div>
    );
  }
}

export default NavMenu;
