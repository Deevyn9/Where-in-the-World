import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useParams, useNavigate } from "react-router";
// import Countries from "./countries";

const Country = ({ darkMode, countries, refetch }) => {
  const params = useParams();
  const navigate = useNavigate();

  let name;
  let flagImg;
  let nativeName;
  let population;
  let region;
  let subregion;
  let capital;
  let topLevelDomain;
  let currencies = [];
  let languages = [];
  let borders = [];

  countries.forEach((country) => {
    if (country.alpha3Code === params.countryCode) {
      name = country.name;
      flagImg = country.flag;
      nativeName = country.nativeName;
      population = country.population;
      region = country.region;
      subregion = country.subregion;
      capital = country.capital;
      topLevelDomain = country.topLevelDomain;

      country.currencies?.forEach((currency) => {
        currencies.push(currency.name);
      });

      country.languages?.forEach((language) => {
        languages.push(language.name);
      });

      country.borders?.forEach((border) => {
        borders.push(border);
      });
    }
  });

  const goBack = () => {
    navigate("/");
  };

  return (
    <div className="country__page">
      <div className={`goback ${darkMode ? "darkmode" : ""}`} onClick={goBack}>
        <ArrowBackIcon />
        <p>Back</p>
      </div>

      <div className="country__page-main">
        <div className="flag__container">
          <img src={flagImg} alt="can't load" />
        </div>
        <div className="main__countrydetails">
          <h2>{name}</h2>
          <div className="countrydetails__sub">
            <div className="left">
              <p>
                Native Name:{" "}
                <span className={`values ${darkMode ? "darkMode" : ""}`}>
                  {nativeName}
                </span>
              </p>
              <p>
                Population:{" "}
                <span className={`values ${darkMode ? "darkMode" : ""}`}>
                  {population}
                </span>
              </p>
              <p>
                Region:{" "}
                <span className={`values ${darkMode ? "darkMode" : ""}`}>
                  {region}
                </span>
              </p>
              <p>
                Sub Region:{" "}
                <span className={`values ${darkMode ? "darkMode" : ""}`}>
                  {subregion}
                </span>
              </p>
              <p>
                Capital:{" "}
                <span className={`values ${darkMode ? "darkMode" : ""}`}>
                  {capital}
                </span>
              </p>
            </div>
            <div className="right">
              <p>
                Top Level Domain:{" "}
                <span className={`values ${darkMode ? "darkMode" : ""}`}>
                  {topLevelDomain}
                </span>
              </p>
              <p>
                Currencies:
                {currencies.map((currency) => {
                  if (currency.indexOf(currency) !== currencies.length - 1) {
                    return (
                      <span className={`values ${darkMode ? "darkMode" : ""}`}>
                        {" "}
                        {currency},
                      </span>
                    );
                  } else {
                    return (
                      <span className={`values ${darkMode ? "darkMode" : ""}`}>
                        {" "}
                        {currency}
                      </span>
                    );
                  }
                })}
              </p>
              <p>
                Languages:{" "}
                {languages.map((language) => {
                  if (languages.indexOf(language) !== languages.length - 1) {
                    return (
                      <span
                        key={language}
                        className={`values ${darkMode ? "darkMode" : ""}`}
                      >
                        {" "}
                        {language},
                      </span>
                    );
                  } else {
                    return (
                      <span
                        key={language}
                        className={`values ${darkMode ? "darkMode" : ""}`}
                      >
                        {" "}
                        {language}
                      </span>
                    );
                  }
                })}
                <span className={`values ${darkMode ? "darkMode" : ""}`}>
                  Dutch, French, German
                </span>
              </p>
            </div>
          </div>
          <div className="borders">
            <h3>Border Countries: </h3>
            <div className="border-containers">
              {borders.length ? (
                borders.map((border) => (
                    <div key={border} className={`border ${darkMode ? "darkMode" : ""}`}onClick={() => {
                      refetch();
                      navigate(`/${border}`)
                    }}>
                      {border}
                    </div>
                ))
                  ) : (
                    <div className={`values ${darkMode ? "darkMode" : ""}`}>
                      <p>No borders...</p>
                    </div>
                  )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
