import React from 'react'
// import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Header = () => {
  return (
    <div>
        <header>
            <h2>Where in the world?</h2>
            <div className="mode-switcher">
                <DarkModeIcon />
                <h3>Dark Mode</h3>
            </div>
        </header>
    </div>
  )
}

export default Header