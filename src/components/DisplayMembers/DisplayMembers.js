import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import './DisplayMembers.css';
const DisplayMembers = ({ avatar, name }) => {
  const [isShown, setIsShown] = useState(false);
  console.log(isShown);

  const addHoverImg = () => {
    console.log('Hover');
    setIsShown(true);
  };

  return (
        <div className="diplayMembers">
          <div
            onMouseOver={addHoverImg}
            className=""
          >
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
