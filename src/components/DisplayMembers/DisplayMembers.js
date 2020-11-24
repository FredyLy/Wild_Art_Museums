import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';
import { PropTypes } from 'prop-types';
import './DisplayMembers.css';

const DisplayMembers = ({ avatar, name, linkedin, github }) => {
  return (
      <div className="diplayMembersContainer">
        <div className="content">
            <div className="content-overlay"></div>
              <img src={avatar} alt={name} />
              <div className="content-details fadeIn-top fadeIn-right">
                <a href={linkedin} target="_blank" rel="noopener noreferrer"><AiFillLinkedin size={45}/></a>
                <br/>
                <br/>
                <a href={github} target="_blank" rel="noopener noreferrer"><FaGithub size={45}/></a>
              </div>
        </div>
      </div>
  );
};

DisplayMembers.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired
};

export default DisplayMembers;
