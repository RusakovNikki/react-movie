
import React, { useState } from 'react';
import './App.css';
import { Searching } from './components/Search/Searching';
import { Main } from './components/Main/Main';

export const App = () => {

  const top20url = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS';
  const [url, setUrl] = useState(top20url); // ссылка, по которой мы делаем запрос на сервер (по умолчанию выводим на главной топ-20)

  const handleSearch = (searchUrl) => {
    setUrl(searchUrl)
  }

  return (
    <div className="App">
      <div className="App-container">
        <header className="App-header">
          {/* <Link to='/'>Главная</Link>  */}
          <Searching onSearch={handleSearch} />  {/* если пользователь что-то вводит в поисковую строку, меняется ссылка для Main (Настя) */}
        </header>
        <main className="App-main">
          <Main url={url} showElements={handleSearch} />  {/* в Main передаём ссылку, по которой будем делать запрос и отображать данные  (Настя) */}
        </main>
        <footer className="App-footer">

        </footer>
      </div>
    </div>
  );
}

