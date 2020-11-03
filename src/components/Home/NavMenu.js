/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import './NavMenu.css';
import { FaHome } from 'react-icons/fa';
import { MdContactMail } from 'react-icons/md';
import { AiOutlineMail, AiOutlinePlus } from 'react-icons/ai';

class NavMenu extends Component {
  state = {
    open: false
  }

  // eslint-disable-next-line no-unused-vars
  expand (open) {
    // eslint-disable-next-line eqeqeq

    var i = document.getElementById('menu').childNodes;
    console.log(i);
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
    console.log(this);
    return (
      <div>
        <div className="container" onClick={() => this.expand(this.state.open)}>
          <div className="toggle" id="toggle">
            <i className="material-icons" id="add">
              {this.state.open === true ? <AiOutlinePlus style={ { transform: 'rotate(45deg)', transition: '1s' } } /> : <AiOutlinePlus style={ { transform: ['rotate(0deg)'], transition: ['1s'] } }/>}
                </i>
          </div>
        </div>
        <div className="menu" id="menu">
          <div className="item">
            <a href="#">
              <i className="material-icons"><span>&#9733;</span></i>
            </a>
          </div>
          <div className="item">
            <a href="#">
              <i className="material-icons"><FaHome /></i>
            </a>
          </div>
          <div className="item">
            <a href="#">
              <i className="material-icons"><MdContactMail /></i>
            </a>
          </div>
          <div className="item">
            <a href="#">
              <i className="material-icons">D</i>
            </a>
          </div>
          <div className="item">
            <a href="#">
              <i className="material-icons"><AiOutlineMail /></i>
            </a>
          </div>
          <div className="item">
            <a href="#">
              <i className="material-icons">F</i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NavMenu;
