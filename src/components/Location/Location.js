import React, { useEffect, useState } from 'react';
import NavMenuLine from '../NavMenuLine/NavMenuLine';
import { PropTypes } from 'prop-types';

import './Location.css';

const Location = ({ title }) => {
  const [open, setOpen] = useState(false);

  const expandLocation = (open) => {
    setOpen(open);
  };

  useEffect(() => {
    if (open === true) {
      document.getElementById('location_page-title').style.transform = 'translateY(-800px)';
    } else {
      document.getElementById('location_page-title').style.transform = 'translateY(0px)';
    }
  }, [open]);

  return (
    <div className="bloc">
      <div className='location_container' >
        <div id='location_page-title'>
          <h1>{title} </h1>
        </div>
        <div>
          <NavMenuLine expandLoc={expandLocation} open={open}/>
        </div>
      </div>
    </div>
  );
};

Location.propTypes = {
  title: PropTypes.string.isRequired
};
export default Location;
