import React from "react";

function Drawer({ onClose, children }) {
  return (
    <div className={`${onClose ? "open" : "close"} container`}>
      <div className={`${onClose ? "open" : "close"} drawer`}>{children}</div>
    </div>
  );
}

export default Drawer;
