import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import './css/App.css'
import AboutFilm from './pages/AboutFilm';


function App() {
  const error = useState(null);
  const loaded = useState(false);
  const films = useState([]);
  let searching = useState(false);
  let correctFilmId = useState(0);

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
            <Route exact path="/" element={<MainPage error={error} loaded={loaded} films={films} searching={searching} correctFilmId={correctFilmId}/>} />
            <Route exact path="/about_film" element={<AboutFilm error={error} loaded={loaded} films={films} correctFilmId={correctFilmId}/>} />
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
