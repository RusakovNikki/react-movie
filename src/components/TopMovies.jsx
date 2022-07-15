import React, { useCallback, useEffect, useState } from 'react';
import { Movie } from './Movie';
import '../css/TopMovies.css';

import { getTopFilms, getFilmData } from '../utils/api';

const apiTimeout = (i) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve();
    }, 100 * i);
  });
};


export const TopMovies = (props) => {
  const [error, setError] = props.error;
  const [loaded, setLoaded] = props.loaded;
  const [films, setFilms] = props.films;
  let [scrolled, setScrolled] = useState(false)
  let [counter, setCounter] = useState(1)
  const [searching, setSearching] = props.searching;
  let filmsState = [];

  const scrollHandler = useCallback( e => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 800) {
      if (!scrolled && counter <= 12) { // так как всего 250 фильмов, выводим по 20, значит 12 страниц
        setCounter(++counter);
        fetchFilms();
        setScrolled(scrolled = true)
        setTimeout(() => { setScrolled(scrolled = false) }, 4000);
      }
    }
  }, [])

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
      setFilms([...filmsState, ...data]);
      filmsState = [...filmsState, ...data]
      console.log(films);
      console.log(data);
      console.log(filmsState);
    } catch (error) {
      setError(error.message);
    }
    setLoaded(true);
  }

  useEffect(() => {
    document.removeEventListener('scroll', scrollHandler)
  }, [props.searching[0]]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return () => document.removeEventListener('scroll', scrollHandler)
  }, []);


  useEffect(() => {
    fetchFilms();
  }, []);




  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!loaded) {
    return <div>Загрузка...</div>;
  } else {
    console.log(films);
    return (
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
    );
  }
};
