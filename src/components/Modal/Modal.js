import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

const Modal = ({ showModal, children, closeModal }) => {
  return (
    showModal && (
      <div onClick={closeModal} className="modalBackground">
      <div className="modalContainer">
        {children}
      </div>
    </div>
    )
  );
};

Modal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
  closeModal: PropTypes.string.isRequired
};

export default Modal;
