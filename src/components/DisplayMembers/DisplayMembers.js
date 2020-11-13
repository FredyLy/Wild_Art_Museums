import React from 'react';
import { PropTypes } from 'prop-types';
import './DisplayMembers.css';
const DisplayMembers = ({ avatar, name }) => {
  // const [isShown, setIsShown] = useState(false);
  // console.log(isShown);
  // const hoverImg = useRef(null);
  // console.log(hoverImg);

  // const addHoverImg = () => {
  //   hoverImg.current.classNameList.add('addHover');
  // };

  // const clearImg = () => {
  //   if (hoverImg.current.classNameList.contains('addHover')) {
  //     hoverImg.current.classNameList.remove('addHover');
  //   }
  // };

  // <div ref={hoverImg} classNameName="diplayMembers">
  //   <div onMouseOver={addHoverImg} onMouseOut={clearImg} >
  //     <img src={avatar} alt={name} />
  //   </div>
  // </div>
  return (
      <div className="diplayMembersContainer">
        <div className="content">
            <div className="content-overlay"></div>
            <img src={avatar} alt={name} />
            <div className="content-details fadeIn-top fadeIn-right">
              <h3>This is a title</h3>
              <p>This is a short description</p>
            </div>
        </div>
      </div>
  );
};

DisplayMembers.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default DisplayMembers;
