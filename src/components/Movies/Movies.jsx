import React, { useState, useEffect, useRef } from 'react';
import { useCallback } from 'react';
import { Link } from 'react-router-dom'; 
import { Movie } from '../Movie/Movie';
import { Preloader } from '../Preloader/Preloader';
import './Movies.css';
import { fetchData } from '../../utils/requests';

export const Movies = ({ url, onClick, setNewUrl/*,  getMovieDesc */ }) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [movies, setMovies] = useState([]);
    const ref = useRef(null) /* Ссылка на preloader */
    let [countPagesOfPagination, setPages] = useState(2) /* Используется для счётчика страниц пагинации */
    let [scrolled, setScrolled] = useState(false) /* Нужно для автопагинации при скролле */

    const handleClick = (movie) => {
        onClick(movie) /* поднимаем наверх объект с инфой, чтобы передать фото, имя и тд в AboutFilm */ /* не знаю, насколько это правильно (Настя) */
    }

    /* делаем автопагинацию при скролле вниз */
    /* Никита */
    const scrollHandler = useCallback(e => {
        let checkPositionAfterBottom = e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight)
        // здесь что-то не так работает и приложение падает, если быстро скролить. кажется countPagesOfPagination неверно считается
        if (checkPositionAfterBottom < 800 && !scrolled) { /* Переменная проверяет, произведен ли скролл до конца страницы */
            setNewUrl(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=${countPagesOfPagination}`)

            setPages(countPagesOfPagination++)
            setScrolled(true)

            ref.current.className = 'preloader' /* Запуск прелоадера с задержкой, чтобы было видно, что она появляется */
            setTimeout(() => { setScrolled(false) }, 2000);
            setTimeout(() => ref.current.className = 'preloader--unvisible', 3000) /* Удаление прелоадера */
        }
    }, [])

    /* Обработчик события на скролл для работы автопагинации */
    useEffect(() => {
        document.addEventListener('scroll', scrollHandler); /* componentDidMount */
        return () => document.removeEventListener('scroll', scrollHandler) /* componentWillUnmount */
    }, []);

    /* componentDidUpdate */
    useEffect(() => {

        const asyncFetch = async (url) => {
            const result = await fetchData(url);
            if (result) {
                setIsLoaded(true);
                setMovies(films => {
                    if (result.films.length < 20) {
                        document.removeEventListener('scroll', scrollHandler)
                        return result.films
                    }
                    else return [...films, ...result.films]
                });
            } else {
                setIsLoaded(true);
                setError(result);
            }

        }
        asyncFetch(url);

    }, [url]);

    if (error) { // нужно обработать ошибку так, чтобы с главной не пропадали все фильмы
        return <div>Ошибка: {error.message}</div>
    } else if (!isLoaded) {
        return <Preloader ref={ref} styles='' />
    } else {
        return <>
            <div className='main__body main__body--margin'>
                {movies.map((movie) => {

                    return <Link key={movie.filmId} to={`/film/${movie.filmId}`}>
                        <Movie
                            key={movie.filmId}
                            movie={movie}
                            onClick={handleClick}
                           /*  getMovieDesc={getMovieDesc} */
                        />
                    </Link>
                }
                )}
            </div>

            <Preloader ref={ref} styles='preloader--unvisible' />
        </>
    }

}