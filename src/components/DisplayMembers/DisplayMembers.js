import React, { useRef } from 'react';
import { PropTypes } from 'prop-types';
import './DisplayMembers.css';
const DisplayMembers = ({ avatar, name }) => {
  // const [isShown, setIsShown] = useState(false);
  // console.log(isShown);
  const hoverImg = useRef(null);
  console.log(hoverImg);

  const addHoverImg = () => {
    hoverImg.current.classList.add('addHover');
  };

  const clearImg = () => {
    if (hoverImg.current.classList.contains('addHover')) {
      hoverImg.current.classList.remove('addHover');
    }
  };

  return (
        <div ref={hoverImg} className="diplayMembers">
          <div onMouseOver={addHoverImg} onMouseOut={clearImg} >
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
