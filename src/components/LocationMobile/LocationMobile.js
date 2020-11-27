import React, { useState } from 'react';
import NavMenuLineMobile from '../NavMenuLineMobile/NavMenuLineMobile';

import { PropTypes } from 'prop-types';

import './LocationMobile.css';

const LocationMobile = ({ title }) => {
  const [open, setOpen] = useState(false);

  const expandLocation = (open) => {
    setOpen(open);
  };

  return (
    <div className="locationmobile_page-bloc">
      <div className='locationmobile_container' >
        <div>
          <NavMenuLineMobile expandLoc={expandLocation} open={open}/>
        </div>
      </div>
    </div>
  );
};

LocationMobile.propTypes = {
  title: PropTypes.string.isRequired
};
export default LocationMobile;
