import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { urlHeaders } from '../../constants';
import {  useSelector } from 'react-redux';
import { Movie } from '../Movie/Movie';
import './Movies.css';

export const Movies = ({ url, onClick, showElements }) => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [movies, setMovies] = useState([]);
    let [countPagesOfPagination, setPages] = useState(2) /* Используется для счётчика страниц пагинации */
    let [scrolled, setScrolled] = useState(false) /* Нужно для автопагинации при скролле */
    const isSearch = useSelector(state => state.isSearchReducer.search) // наше состояние в state

    const handleClick = (movie) => {
        onClick(movie) /* поднимаем наверх объект с инфой, чтобы передать фото, имя и тд в AboutFilm */ /* не знаю, насколько это правильно (Настя) */
    }

    /* делаем автопагинацию при скролле вниз */
    /* Никита */
    const scrollHandler = useCallback(e => {
        let checkPositionAfterBottom = e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight)

        if (checkPositionAfterBottom < 400 && !scrolled) { /* Переменная проверяет, произведен ли скролл до конца страницы */
            showElements(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=${countPagesOfPagination}`)
            setPages(countPagesOfPagination++)
            setScrolled(scrolled = true)
            setTimeout(() => { setScrolled(scrolled = false) }, 2000);
        }
    }, [])
    console.log(isSearch)

    /* Для поиска. Убирает автопагинацию при поиске фильмов */
    useEffect(() => {
        document.removeEventListener('scroll', scrollHandler)
    }, [isSearch]);

    /* Обработчик собития на скролл для работы автопагинации */
    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);
        return () => document.removeEventListener('scroll', scrollHandler)
    }, []);

    useEffect(() => {

        /* делаем запрос на сервер для отображения фильмов */
        /* Настя */

        const urlParams = {
            method: 'GET',
            headers: urlHeaders,
        };

        fetch(url, urlParams)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setMovies(films => isSearch ? result.films : [...films, ...result.films]);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [url]);

    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Загрузка...</div>;
    } else {
        return <div className='Movies'>
            {movies.map((movie) => {

                return <Link key={movie.filmId}
                    to={`/film/${movie.filmId}`}>
                    <Movie
                        key={movie.filmId}
                        id={movie.filmId}
                        onClick={handleClick}
                        name={movie.nameRu}
                        foto={movie.posterUrl}
                        rating={movie.rating}
                        genresStr={movie.genres}
                        extra='extra'
                    />
                </Link>
            }
            )}
        </div>
    }

}