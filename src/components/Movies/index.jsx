import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { fetchData } from '../../utils/requests';

import './styles.css';

import { Preloader } from './components/Preloader';
import { Movie } from './components/Movie';
import { Slider } from './components/Slider';

export const Movies = ({ url, onClick, onScroll }) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [movies, setMovies] = useState([]);

    const ref = useRef(null);
    let [countPagesOfPagination, setPages] = useState(2) /* Используется для счётчика страниц пагинации */
    let [scrolled, setScrolled] = useState(false) /* Нужно для автопагинации при скролле */

    const handleClick = (movie) => {
        onClick(movie) /* поднимаем наверх объект с инфой по фильиу в AboutMovie */
    }

    /* делаем автопагинацию при скролле вниз */
    /* Никита */
    const scrollHandler = useCallback(e => {
        let checkPositionAfterBottom = e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight)
        // здесь что-то не так работает и приложение падает, если быстро скролить. кажется countPagesOfPagination неверно считается
        if (checkPositionAfterBottom < 800 && !scrolled) { /* Переменная проверяет, произведен ли скролл до конца страницы */
            onScroll(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=${countPagesOfPagination}`)
            setPages(++countPagesOfPagination)
            setScrolled(scrolled = true)

            ref.current.className = 'preloader' /* Запуск прелоадера с задержкой, чтобы было видно, что она появляется */
            setTimeout(() => { setScrolled(scrolled = false) }, 2000);
            setTimeout(() => ref.current.className = 'preloader--invisible', 3000) /* Удаление прелоадера */
        }
    }, [])

    /* Обработчик события на скролл для работы автопагинации */
    useEffect(() => {
        document.addEventListener('scroll', scrollHandler); // componentDidMount 
        return () => document.removeEventListener('scroll', scrollHandler) //componentWillUnmount
    }, []);


    useEffect(() => {
        // componentDidUpdate
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
            <div className="main__slider">
                {movies.length < 20 ? "" : <Slider />}
            </div>
            <div className='main__body main__body--margin'>
                {movies.map((movie) => {

                    return <Link key={movie.filmId} to={`/film/${movie.filmId}`}>
                        <Movie
                            key={movie.filmId}
                            movie={movie}
                            onClick={handleClick}
                        />
                    </Link>
                }
                )}
            </div>

            <Preloader ref={ref} styles='preloader--invisible' />
        </>
    }

}