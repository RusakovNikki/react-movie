
import React, { useState } from 'react';
import './App.css';
import { Searching } from './components/Search/Searching';
import logo from './images/logo.png'
import { Main } from './components/Main/Main';

export const App = () => {

  const top20url = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS';
  const [url, setUrl] = useState(top20url); // ссылка, по которой мы делаем запрос на сервер (по умолчанию выводим на главной топ-20)
  const handleSearch = (searchUrl) => {
    setUrl(searchUrl)
  }

  return (
    <>
      <header className="header">
        {/* <Link to='/'>Главная</Link>  */}
        <div className='header__body'>
          <div className="header__logo">
            <img src={logo} alt="logo" className='header__logo-item logo-item' />
          </div>
          <Searching onSearch={handleSearch} />  {/* если пользователь что-то вводит в поисковую строку, меняется ссылка для Main (Настя) */}
        </div>
      </header>
      <main className="main">
        <Main url={url} showElements={handleSearch} />  {/* в Main передаём ссылку, по которой будем делать запрос и отображать данные  (Настя) */}
      </main>
      <footer className="footer footer--fixed">
        <div className='footer__body'>
          © Rusakov Nikita, Anastasia Soboleva, Julia Kiriushina, Ilya Ivanov
        </div>
      </footer>
    </>
  )
}

