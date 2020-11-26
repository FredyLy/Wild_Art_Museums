import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './Loader.css';

const Loader = ({ loadingMsg, styling }) => {
  return (
    <Fragment>
      <p style={ styling}>{ loadingMsg }</p>
      <div className="loader">
      </div>
    </Fragment>
  );
};

Loader.propTypes = {
  loadingMsg: PropTypes.string,
  styling: PropTypes.string
};

export default Loader;
