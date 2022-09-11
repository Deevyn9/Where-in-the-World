import React from 'react'
import SearchIcon from "@mui/icons-material/Search";

const Countries = () => {
  return (
    <div>
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
      </div>
    </div>
  );
  }

export default Countries