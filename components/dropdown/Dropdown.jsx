"use client";

import { React, useState } from "react";

function Dropdown({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button>Menu</button>

      <div className={`${open ? "open" : "close"} dropdown`}>{children}</div>
    </div>
  );
}

export default Dropdown;
