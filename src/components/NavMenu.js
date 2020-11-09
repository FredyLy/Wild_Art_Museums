import React, { Component } from 'react';
import { FaHome, FaPalette, FaQuestion, FaUserFriends } from 'react-icons/fa';
import { MdContactMail } from 'react-icons/md';
import { GiGreekTemple } from 'react-icons/gi';
import { AiOutlinePlus } from 'react-icons/ai';

import './NavMenu.css';

class NavMenu extends Component {
  state = {
    open: false
  }

  expand (open) {
    var i = document.getElementById('menu').childNodes;
    if (open === false) {
      document.getElementById('menu').style.transform = 'scale(1)';
      i[0].style.transform = 'translateY(-80px)';
      i[1].style.transform = 'translate(70px, -40px)';
      i[2].style.transform = 'translate(70px, 40px)';
      i[3].style.transform = 'translateY(80px)';
      i[4].style.transform = 'translate(-70px,40px)';
      i[5].style.transform = 'translate(-70px,-40px)';
      this.setState({ open: !open });
    } else {
      document.getElementById('menu').style.transform = 'scale(0.9)';
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
        <div className="container" onClick={() => this.expand(this.state.open)}>
          <div className="toggle" id="toggle">
            <i className="react-icons" id="add">
              {this.state.open === true ? <AiOutlinePlus style={ { transform: 'rotate(45deg)', transition: '1s' } } /> : <AiOutlinePlus style={ { transform: ['rotate(0deg)'], transition: ['1s'] } }/>}
                </i>
          </div>
        </div>
        <div className="menu" id="menu">
          <div className="item">
            <a href="#">
              <i className="react-icons" ><GiGreekTemple /></i>
            </a>
          </div>
          <div className="item">
            <a href="#">
              <i className="react-icons"><FaUserFriends /></i>
            </a>
          </div>
          <div className="item">
            <a href="#">
              <i className="react-icons"><FaHome /></i>
            </a>
          </div>
          <div className="item">
            <a href="#">
              <i className="react-icons"><FaQuestion /></i>
            </a>
          </div>
          <div className="item">
            <a href="#">
              <i className="react-icons"><MdContactMail /></i>
            </a>
          </div>
          <div className="item">
            <a href="#">
              <i className="react-icons"><FaPalette /></i>
            </a>
          </div>
        </div>
    </div>
    );
  }
}

export default NavMenu;
