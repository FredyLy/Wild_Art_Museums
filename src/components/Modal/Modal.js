import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './Modal.css';

const Modal = ({ showModal, children, closeModal }) => {
  return ReactDOM.createPortal(
    showModal && (
      <div className="modalBackground" onClick={closeModal}>
        <div className="modalContainer">
          {children}
        </div>
      </div>
    ), document.getElementById('second-root')
  );
};

Modal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
  closeModal: PropTypes.string.isRequired
};

export default Modal;
