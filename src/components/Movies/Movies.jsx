import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { urlHeaders } from '../../constants';
import { Movie } from '../Movie/Movie';
import './Movies.css';

export const Movies = ({ url, onClick }) => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [movies, setMovies] = useState([]);

    const handleClick = (movie) => {
        onClick(movie) /* поднимаем наверх объект с инфой, чтобы передать фото, имя и тд в AboutFilm */ /* не знаю, насколько это правильно (Настя) */
    }

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
                    setMovies(result.films);
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