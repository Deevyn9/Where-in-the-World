import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Flag from "../countries/belgium-flag.jpg"

const Countries = () => {
  return (
    <div className="app-body">
      <div className="filters">
        <div className="search-bar">
          <SearchIcon />
          <input type="text" placeholder="Search for a country..." />
        </div>
        <div className="select-bar">
          <select placeholder="Filter by region">
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

      <div className="countries">
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
