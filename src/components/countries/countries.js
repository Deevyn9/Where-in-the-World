import React from "react";

const Countries = ({
  darkMode,
  name,
  capital,
  population,
  region,
  flag,
  showDetails,
  code,
}) => {
  const showDetailsHandler = () => {
    showDetails(code);
  };

  return (
    <div
      className={`country-container ${darkMode? "darkMode" : ""}`}
      // showDetails={showDetails}
      onClick={showDetailsHandler}
    >
      <div className="image-container">
        <img src={flag} alt="can't load" />
      </div>

      <div className="country-details">
        <h3>{name}</h3>

        <p>
          Population: <span className="value">{population}</span>
        </p>
        <p>
          Region: <span className="value">{region}</span>
        </p>
        <p>
          Capital: <span className="value">{capital}</span>
        </p>
      </div>
    </div>
  );
};

export default Countries;
