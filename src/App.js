
import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';

import { AboutMovie } from './components/AboutMovie';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Movies } from './components/Movies';

import { TOP20_URL } from './constants';

export const App = () => {

  const [url, setUrl] = useState(TOP20_URL);
  const [currMovie, setCurrMovie] = useState({});

  const handleUrl = (newUrl) => {
    if (newUrl === '') {
      setUrl(TOP20_URL); // если пустой поиск
    }
    else {
      setUrl(newUrl)
    }
  }

  const handleClick = (movie) => {
    setCurrMovie(movie);
  }

  return (
    <>
      <Header onSearch={handleUrl} />
      <Routes>
        <Route path='/' element={
          <Movies url={url} onClick={handleClick} onScroll={handleUrl} />
        }>
        </Route>
        <Route path='/film/:id' element={
          <AboutMovie movie={currMovie} />
        }>
        </Route>
      </Routes>
      <Footer />
    </>
  )
}