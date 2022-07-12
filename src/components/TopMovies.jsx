import React, { useEffect, useState } from 'react';
import { Movie } from './Movie';
import '../css/TopMovies.css';

import { getTopFilms, getFilmData } from '../utils/api';

const apiTimeout = (i) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve();
    }, 200 * i);
  });
};


export const TopMovies = () => {
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [films, setFilms] = useState([]);
  let [scrolled, setScrolled] = useState(false)
  let [counter, setCounter] = useState(1)

  async function fetchFilms() {
    try {
      const result = await getTopFilms(counter);
      const data = await Promise.all(
        result.films.map(async (film, i) => {
          await apiTimeout(i);
          const extra = await getFilmData(film.filmId);
          return { ...film, extra };
        }),
      );
      setFilms([...films, ...data]);
      console.log(typeof films);
      console.log(typeof data);
    } catch (error) {
      setError(error.message);
    }
    setLoaded(true);
  }

  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 800) {
      if (!scrolled && counter <= 12) { // так как всего 250 фильмов, выводим по 20, значит 12 страниц
        setCounter(++counter);
        fetchFilms();
        setScrolled(scrolled = true)
        setTimeout(() => { setScrolled(scrolled = false) }, 10000);
      }
    }
  }
  document.addEventListener('scroll', scrollHandler)

  useEffect(() => { 
    debugger
    fetchFilms(films); 
  }, []);


  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!loaded) {
    return <div>Загрузка...</div>;
  } else {
    console.log(films);
    return (
      <div className='container'>
        <div className='description__wrapper'>
          <div className='topMovies'>
            {films.map((film) => (
              <Movie
                key={film.filmId}
                id={film.filmId}
                name={film.nameRu}
                extra={film.extra}
                rating={film.rating}
                genres={film.genres}
                foto={film.posterUrl}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
};
