import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Movie } from './Movie';
import '../css/TopMovies.css';
import 'aos/dist/aos.css';
import spinner from '../images/spinner.svg'
import { getTopFilms, getFilmData } from '../utils/api';
import { Link } from 'react-router-dom';
import apiTimeout from '../functions/apiTimeout'


export const TopMovies = (props) => {
  const [error, setError] = props.error;
  const [loaded, setLoaded] = props.loaded;
  const [films, setFilms] = props.films;
  let [scrolled, setScrolled] = useState(false)
  let [counter, setCounter] = useState(1)
  const ref = useRef(null);
  const searching = props.searching[0];

  /* Автопагинация главной страницы. При прокрутке к концу страницы, появляются новые фильмы */
  const scrollHandler = useCallback(e => {
    let checkPositionAfterBottom = e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight)

    if (checkPositionAfterBottom < 800) { /* Переменная проверяет, произведен ли скролл до конца страницы */
      if (!scrolled && counter <= 12) { // так как всего 250 фильмов, выводим по 20, значит 12 страниц
        setCounter(++counter);
        setTimeout(() => ref.current.className = 'preloader', 1000); /* Запуск прелоадера с задержкой, чтобы было видно, что она появляется */
        fetchFilms();
        setTimeout(() => ref.current.className = 'preloader unvisible', 3000); /* Удаление прелоадера */
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
      setFilms(films => { return [...films, ...data] });
    } catch (error) {
      setError(error.message);
    }
    setLoaded(true);
  }

  /* Для поиска. Убирает автопагинацию при поиске фильмов */
  useEffect(() => {
    document.removeEventListener('scroll', scrollHandler)
  }, [searching]);

  /* Обработчик собития на скролл для работы автопагинации */
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
    return <div className='preloader'>
      <img alt='' src={spinner} width='150' height='150' />
    </div>;
  } else {
    //  console.log(films);
    return (
      <div className='description__wrapper'>
        <div className='topMovies'>
          {films.map((film) => (
            <Link
              key={film.filmId}
              to={`/film/${film.filmId}`}>
              <Movie
                key={film.filmId}
                id={film.filmId}
                name={film.nameRu}
                extra={film.extra}
                rating={film.rating}
                genres={film.genres}
                foto={film.posterUrl}
              />
            </Link>

          ))}
        </div>
        <div className='preloader unvisible' ref={ref}>
          <img alt='' src={spinner} width='100' height='100' /></div>
      </div>
    );
  }
};
