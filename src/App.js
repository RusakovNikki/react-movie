
import React, { useState } from 'react';
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { TOP20_URL } from './constants';

export const App = () => {

  const [url, setUrl] = useState(TOP20_URL); // ссылка, по которой мы делаем запрос на сервер (по умолчанию выводим на главной топ-20)

  const handleSearch = (searchUrl) => {
    setUrl(searchUrl)
  }

  return (
    <>
      <Header onSearch={handleSearch} />
      <Main url={url} showElements={handleSearch} />
      <Footer />
    </>
  )
}

