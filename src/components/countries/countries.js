import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Flag from "../countries/belgium-flag.jpg"

const Countries = ({darkMode}) => {
  return (
    <div className={`app-body ${darkMode ? 'darkmode' : ''}`}>
      <div className="filters">
        <div className={`search-bar ${darkMode ? 'darkMode' : ''}`}>
          <SearchIcon />
          <input type="text" placeholder="Search for a country..." />
        </div>
        <div className={`select-bar ${darkMode ? 'darkMode' : ''}`}>
          <select>
            <option disabled selected>
              Filter by Region
            </option>
            <option>Africa</option>
            <option>America</option>
            <option>Asia</option>
            <option>Europe</option>
            <option>Ocenia</option>
          </select>
        </div>
      </div>

      <div className={`countries ${darkMode ? 'darkMode' : ''}`}>
        <div className="country-container">
          <div className="image-container">
            <img src={Flag} alt="can't load image" />
          </div>

          <div className="country-details">
            <h3>Germany</h3>

            <p>
              Population: <span className="value">81,770,900</span>
            </p>
            <p>
              Population: <span className="value">Europe</span>
            </p>
            <p>
              Capital: <span className="value">Berlin</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countries;
