import React, { Component } from 'react';
import './ContactUs.css';
import logoTwitter from './assets/twitter.png';
import logoFacebook from './assets/facebook.png';
import logoLinkedin from './assets/linkedin.png';
import logoInstagram from './assets/instagram.png';
import logoMap from './assets/map.png';
import logoEmail from './assets/email.png';
import logoPhone from './assets/telephone.png';

class ContactUs extends Component {
  constructor (props) {
    super(props);
    this.state = {
      FirstName: '',
      LastName: '',
      Mail: '',
      Phone: '',
      Message: ''
    };
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangeMail = this.handleChangeMail.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
  }

  handleChangeFirstName (event) {
    this.setState({ FirstName: event.target.value });
  }

  handleChangeLastName (event) {
    this.setState({ LastName: event.target.value });
  }

  handleChangeMail (event) {
    this.setState({ Mail: event.target.value });
  }

  handleChangePhone (event) {
    this.setState({ Phone: event.target.value });
  }

  handleChangeMessage (event) {
    this.setState({ Message: event.target.value });
  }

  render () {
    return (
            <div className="fullpage1">
            <div>
                <div className="ContactUs">
                    <div className="contact-information">
                    <div className="text-justify">
                <h1>Contact Information</h1>
                <p>Fill up the formand our Team will get back to you within 24 hours</p>
                <p><img className="logo" src={logoMap} />44 rue Alphonse Penaud, 75020 Paris</p>
                <p><img className="logo" src={logoEmail} />paris@wildcodeschool.com</p>
                <p><img className="logo" src={logoPhone} />+33 (0)7 84 39 08 74</p>
                <div>
                        <img className="network-logo" src={logoTwitter} alt="logo twitter" />
                        <img className="network-logo" src={logoFacebook} alt="logo Facebook" />
                        <img className="network-logo" src={logoLinkedin} alt="logo Linkedin" />
                        <img className="network-logo" src={logoInstagram} alt="logo Instagram" />
                    </div>
                </div>
                    </div>
                    <div className="formulaire-content">
                    <form className="formulaire">
                        <label className="row1" htmlFor="FirstName">First Name</label>
                        <label className="row1" htmlFor="LastName" >Last Name</label>
                        <input id="First Name" type="text" value={this.state.FirstName} onChange={this.handleChangeFirstName} />
                        <input id="Last Name" type="text" className="element-4" value={this.state.LastName} onChange={this.handleChangeLastName} />
                        <label htmlFor="Mail" className="element-5">Mail</label>
                        <label htmlFor="Phone" className="element-6">Phone : </label>
                        <input id="Mail" type="text" className="element-7" value={this.state.Mail} onChange={this.handleChangeMail} />
                        <input id="Phone" type="text" className="element-8" value={this.state.Phone} onChange={this.handleChangePhone} />
                        <label htmlFor="Message" className="element-9">Message : </label>
                        <input id="Message" type="text" className="element-10" value={this.state.Message} onChange={this.handleChangeMessage} />
                            <button type="button" value="SendMessage" className="element-11" >Send Message</button>
                    </form>
                    </div>
            </div>
            </div>
            <div className="fullpage2"></div>
            <div className="fullpage3">
            <div className="Location">
            </div>

            </div>
            </div>
    );
  }
}

export default ContactUs;
