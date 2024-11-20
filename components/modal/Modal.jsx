import React from "react";

function Modal({ onClose, children }) {
  return (
    <div className={`${onClose ? "open" : "close"} container`}>
      <div className={`${onClose ? "open" : "close"} modal`}>{children}</div>
    </div>
  );
}

export default Modal;
