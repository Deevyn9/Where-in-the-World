import React from 'react'
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Flag from "../countries/belgium-flag.jpg"

const Country = () => {
  return (
    <div className="country__page">
      <div className="goback">
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
                Native Name: <span className="values">Belgie</span>
              </p>
              <p>
                Population: <span className="values">11,319,511</span>
              </p>
              <p>
                Region: <span className="values">Europe</span>
              </p>
              <p>
                Sub Region: <span className="values">Western Europe</span>
              </p>
              <p>
                Capital: <span className="values">Brussels</span>
              </p>
            </div>
            <div className="right">
              <p>
                Top Level Domain: <span className="values">.be</span>
              </p>
              <p>
                Currencies: <span className="values">Euro</span>
              </p>
              <p>
                Languages: <span className="values">Dutch, French, German</span>
              </p>
            </div>
          </div>
          <div className="borders">
            <h3>Border Countries: </h3>
            <div className="border-containers">
                <div className="border">France</div>
                <div className="border">Germany</div>
                <div className="border">Netherlands</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Country
