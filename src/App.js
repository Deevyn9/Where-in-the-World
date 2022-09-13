import "./App.css";
import Header from "./components/header";
import Countries from "./components/countries/countries";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Country from "./components/countries/country";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="country" element={<Country />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
