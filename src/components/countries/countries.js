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
            <h3>Belgium</h3>

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

// import React from "react";
// import SearchIcon from "@mui/icons-material/Search";
// import Flag from "../countries/belgium-flag.jpg";
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const Countries = ({ darkMode }) => {
//   const [countries, setCountries] = useState([]);
//   const [filtered, setFiltered] = useState([]);
//   const [searchInput, setSearchInput] = useState("");
//   const [isLoading, setIsLoading] = useState(true);

//   const fetchCountries = async () => {
//     const res = await fetch(
//       // `http://api.countrylayer.com/v2/all?access_key=${process.env.REACT_APP_ACCESS_KEY}`
//       "https://restcountries.com/v2/all?fields=flag,name,population,region,capital"
//     );
//     const data = await res.json();
//     setCountries(data);
//     setIsLoading(false);
//   };

//   useEffect(() => {
//     fetchCountries();
//   }, []);

//   const region = [
//     {
//       name: "Africa",
//     },
//     {
//       name: "Asia",
//     },
//     {
//       name: "Oceania",
//     },
//     {
//       name: "Americas",
//     },
//     {
//       name: "Europe"
//     }
//   ];

//   const fetchCountryByRegion = async (regions) => {
//     const res = await fetch(
//       // `http://api.countrylayer.com/v2/region/${regions}?access_key=${process.env.REACT_APP_ACCESS_KEY}`
//       "https://restcountries.com/v2/region/{region}"
//     );
//     const data = await res.json();
//     setCountries(data);
//     console.log(data);
//   };
//   useEffect(() => {
//     fetchCountryByRegion();
//   }, []);

//   const searchCountries = (searchValue) => {
//     setSearchInput(searchValue);

//     if (searchInput) {
//       const filteredCountries = countries.filter((country) =>
//         Object.values(country)
//           .join("")
//           .toLowerCase()
//           .includes(searchValue.toLowerCase())
//       );
//       setFiltered(filteredCountries);
//     } else {
//       setFiltered(countries);
//     }
//   };

//   return (
//     <div>
//       {isLoading ? (
//         <h1 className="isloading">Loading..</h1>
//       ) : (
//         <div className={`app-body ${darkMode ? "darkmode" : ""}`}>
//           <div className="filters">
//             <div className={`search-bar ${darkMode ? "darkMode" : ""}`}>
//               <SearchIcon />
//               <input
//                 type="text"
//                 placeholder="Search for a country..."
//                 value={searchInput}
//                 onChange={(e) => searchCountries(e.target.value)}
//                 autoComplete="off"
//               />
//             </div>
//             <div className={`select-bar ${darkMode ? "darkMode" : ""}`}>
//               <select
//                 name="select"
//                 value={region.name}
//                 onChange={(e) => fetchCountryByRegion(e.target.value)}
//               >
//                 <option disabled defaultValue>
//                   All
//                 </option>
//                 <option>Africa</option>
//                 <option>America</option>
//                 <option>Asia</option>
//                 <option>Europe</option>
//                 <option>Oceania</option>
//               </select>
//             </div>
//           </div>

//           {searchInput.length > 0 ? (
//             <div className={`countries ${darkMode ? "darkMode" : ""}`}>
//               {filtered.map(({ flag, name, capital, region}) => (
//                 <Link to={`/${capital}`} key={name}>
//                   <div className="country-container">
//                     <div className="image-container">
//                       <img src={flag} alt="can't load" />
//                     </div>

//                     <div className="country-details">
//                       <h3>{name}</h3>

//                       <p className={`${darkMode ? "darkMode" : ""}`}>
//                         Population: <span className="value"></span>
//                       </p>
//                       <p>
//                         Region: <span className="value">{region}</span>
//                       </p>
//                       <p>
//                         Capital: <span className="value">{capital}</span>
//                       </p>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           ) : (
//             <div className={`countries ${darkMode ? "darkMode" : ""}`}>
//               {countries.map(({flag, population, name, capital, region }) => (
//                 <Link to={`/${capital}`} key={name}>
//                   <div className="country-container">
//                     <div className="image-container">
//                       <img src={flag} alt="can't load" />
//                     </div>

//                     <div className="country-details">
//                       <h3>{name}</h3>

//                       <p className={`${darkMode ? "darkMode" : ""}`}>
//                         Population: <span className="value">{population}</span>
//                       </p>
//                       <p>
//                         Region: <span className="value">{region}</span>
//                       </p>
//                       <p>
//                         Capital: <span className="value">{capital}</span>
//                       </p>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Countries;