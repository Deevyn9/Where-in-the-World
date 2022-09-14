import React from 'react'
// import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Header = ({onClick, darkMode}) => {
  return (
    <div>
        <header className={`header ${darkMode ? 'darkMode' : '' }`}>
            <h2>Where in the world?</h2>
            <div className="mode-switcher" onClick={onClick}>
                <DarkModeIcon />
                <h3>Dark Mode</h3>
            </div>
        </header>
    </div>
  )
}

export default Header