import React from 'react'
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Header = ({onClick, darkMode}) => {
  return (
      <header className={`header ${darkMode ? "darkMode" : ""}`}>
        <h2>Where in the world?</h2>
        <div className="mode-switcher" onClick={onClick}>
          {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
          <h3>{darkMode ? "Light " : "Dark "}Mode</h3>
        </div>
      </header>
  );
}

export default Header