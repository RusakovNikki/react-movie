import React, { useEffect, useState } from 'react';
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

export const TopMovies = () => {
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [films, setFilms] = useState(null);

  useEffect(() => {
    async function fetchFilms() {
      try {
        const result = await getTopFilms();
        const data = await Promise.all(
          result.films.map(async (film, i) => {
            await apiTimeout(i);
            const extra = await getFilmData(film.filmId);
            return { ...film, extra };
          }),
        );
        setFilms(data);
        console.log(data);
      } catch (error) {
        setError(error.message);
      }
      setLoaded(true);
    }
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
