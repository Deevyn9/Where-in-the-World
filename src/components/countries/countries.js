import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Flag from "../countries/belgium-flag.jpg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Countries = ({darkMode}) => {
    const [countries, setCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const fetchCountries = async() => {
        const res = await fetch(`http://api.countrylayer.com/v2/all?access_key=${process.env.REACT_APP_ACCESS_KEY}`);
        const data = await res.json()
        setCountries(data)
        setIsLoading(false)
    }

     useEffect(() => {
      fetchCountries()
     }, [])


  return (
    <div>
      {isLoading ? (
        <h1 className="isloading">Loading..</h1>
      ) : (
        <div className={`app-body ${darkMode ? "darkmode" : ""}`}>
          <div className="filters">
            <div className={`search-bar ${darkMode ? "darkMode" : ""}`}>
              <SearchIcon />
              <input type="text" placeholder="Search for a country..." />
            </div>
            <div className={`select-bar ${darkMode ? "darkMode" : ""}`}>
              <select>
                <option disabled defaultValue>
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

          <div className={`countries ${darkMode ? "darkMode" : ""}`}>
            {countries.map(({ name, capital, region }) => (
              <Link to={`/${capital}`} key={name}>
                <div className="country-container">
                  <div className="image-container">
                    <img src={Flag} alt="can't load image" />
                  </div>

                  <div className="country-details">
                    <h3>{name}</h3>

                    <p>
                      Population: <span className="value">81,770,900</span>
                    </p>
                    <p>
                      Region: <span className="value">{region}</span>
                    </p>
                    <p>
                      Capital: <span className="value">{capital}</span>
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Countries;
