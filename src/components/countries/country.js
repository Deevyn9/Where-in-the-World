import React from 'react'
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Flag from "../countries/belgium-flag.jpg"

const Country = ({darkMode}) => {
  return (
    <div className="country__page">
      <div className={`goback ${darkMode ? 'darkmode' : ''}`}>
        <ArrowBackIcon />
        <p>Back</p>
      </div>

      <div className="country__page-main">
        <div className="flag__container">
          <img src={Flag} alt="can't load image" />
        </div>
        <div className="main__countrydetails">
          <h2>Belgium</h2>
          <div className="countrydetails__sub">
            <div className="left">
              <p>
                Native Name: <span className={`values ${darkMode ? 'darkMode' : ''}`}>Belgie</span>
              </p>
              <p>
                Population: <span className={`values ${darkMode ? 'darkMode' : ''}`}>11,319,511</span>
              </p>
              <p>
                Region: <span className={`values ${darkMode ? 'darkMode' : ''}`}>Europe</span>
              </p>
              <p>
                Sub Region: <span className={`values ${darkMode ? 'darkMode' : ''}`}>Western Europe</span>
              </p>
              <p>
                Capital: <span className={`values ${darkMode ? 'darkMode' : ''}`}>Brussels</span>
              </p>
            </div>
            <div className="right">
              <p>
                Top Level Domain: <span className={`values ${darkMode ? 'darkMode' : ''}`}>.be</span>
              </p>
              <p>
                Currencies: <span className={`values ${darkMode ? 'darkMode' : ''}`}>Euro</span>
              </p>
              <p>
                Languages: <span className={`values ${darkMode ? 'darkMode' : ''}`}>Dutch, French, German</span>
              </p>
            </div>
          </div>
          <div className="borders">
            <h3>Border Countries: </h3>
            <div className="border-containers">
              <div className={`border ${darkMode ? 'darkMode' : ''}`}>France</div>
              <div className={`border ${darkMode ? 'darkMode' : ''}`}>Germany</div>
              <div className={`border ${darkMode ? 'darkMode' : ''}`}>Netherlands</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Country
