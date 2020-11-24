import React, { useEffect, useState } from 'react';
import NavMenuLine from '../NavMenuLine/NavMenuLine';

import './Location.css';

const pageTitle = 'GALLERY';

const Location = () => {
  const [open, setOpen] = useState(false);

  const expandLocation = (open) => {
    setOpen(open);
  };

  useEffect(() => {
    if (open === true) {
      document.getElementById('location_page-title').style.transform = 'translateY(-400px)';
    } else {
      document.getElementById('location_page-title').style.transform = 'translateY(0px)';
    }
  }, [open]);

  return (
            <div className="bloc">
              <div className='location_container' >
                <div id='location_page-title'>
                  <h1>{pageTitle}</h1>
                </div>
                <div>
                  <NavMenuLine expandLoc={expandLocation} open={open}/>
                </div>
              </div>
            </div>
  );
};

export default Location;
