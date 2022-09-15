import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Countries from "./components/countries/countries";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Country from "./components/countries/country";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  const switchMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? 'darkMode' : ''}`} >
      <BrowserRouter>
        <Header onClick={switchMode} darkMode={darkMode}/>
        <Routes>
          <Route path="/" exact element={<Countries darkMode={darkMode}/>} />
          <Route path="/:capital" element={<Country darkMode={darkMode} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
