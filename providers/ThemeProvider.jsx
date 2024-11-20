"use client";
import React, { useEffect, useState } from "react";

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setTheme(theme);
  }, [theme]);

  return <div>{children}</div>;
}

export default ThemeProvider;
