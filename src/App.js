import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import './css/App.css'
import AboutFilm from './pages/AboutFilm';

function App() {
  const error = useState(null);
  const loaded = useState(false);
  const films = useState([]);
  let searching = useState(false)

  return (
    <div className="wrapper">
      <div className='background-header'>
        <div className='container'>
          <Header error={error} loaded={loaded} films={films} searching={searching} />
        </div>
      </div>
      <div className='background-main'>
        <div className='container'>
          <Routes>
            <Route path="/" element={<MainPage error={error} loaded={loaded} films={films} searching={searching} />} />
            <Route path="/film/:id" element={<AboutFilm />} />
          </Routes>
        </div>
      </div>
      <div className='background-footer'>
        <div className='container'>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
