import './App.css';
import Navbar from './components/Navbar';
import countriesData from './countries.json'
import React, { useState } from 'react'
import CountriesList from './components/CountriesList';
import { Routes, Route } from 'react-router-dom';
import CountriesDetails from './components/CountryDetails'

function App() {
  const setInitialValue = () => {
    return countriesData
  }
  const [countries, setCountries] = useState(() => setInitialValue())
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          {/* React-Router Route rendering the CountryDetails should go here */}
          <Routes>
          {/* <Route path='/' element={<CountriesList countries={countries}/>} /> */}
          <Route path='/:alpha3code' element={<CountriesDetails countries={countries}/>} />
        </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;