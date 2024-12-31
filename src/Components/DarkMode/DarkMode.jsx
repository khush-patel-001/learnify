import React from "react";
import "./DarkMode.css";
import { useEffect } from "react";
import { useState } from "react";
import theme_icon from '../../assets/theme-icon.png'

const DarkMode = () => {
  const [theme, setTheme] = useState("light-mode");
  const toggleTheme = () => {
    if (theme === "dark-mode") {
      setTheme("light-mode");
    } else {
      setTheme("dark-mode");
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="theme-icon">
      <img src={theme_icon} alt="" onClick={toggleTheme} />
    </div>
  );
};

export default DarkMode;
