import React, { useRef } from 'react';
import { PropTypes } from 'prop-types';
import './DisplayMembers.css';

const DisplayMembers = ({ avatar, name }) => {
  const hoverImg = useRef(null);
  console.log(hoverImg);
  // const addHoverImg = () => {
  // console.log('Hover');
  //   setIsShown(true);
  // };

  return (
        <div className='diplayMembers'>
          <div ref={hoverImg} >
            <img src={avatar} alt={name} />
          </div>
        </div>
  );
};

DisplayMembers.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default DisplayMembers;
