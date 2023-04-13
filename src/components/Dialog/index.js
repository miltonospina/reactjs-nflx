import React from "react";
import { createPortal } from "react-dom";
import FocusTrap from "focus-trap-react";
import "./style.scss";

const Dialog = ({ title, children, onClose }) => {
  const closeDialog = () => {
    onClose();
  };

  return createPortal(
    <>
      <div className="modal-overlay" onClick={closeDialog}></div>
      <FocusTrap>
        <div className="modal">
          <div className="modal-header">
            <h3 data-testid="modal-title">{title}</h3>
            <button
              className="close-button"
              onClick={closeDialog}
              data-testid="close-button"
            >
              ×
            </button>
          </div>
          <div className="modal-body" data-testid="modal-body">
            {children}
          </div>
        </div>
      </FocusTrap>
    </>,
    document.body
  );
};

export default Dialog;
