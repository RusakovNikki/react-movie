import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getFilmData } from '../../utils/requests';
import { MovieDesc } from '../MovieDesc/MovieDesc';
import './Movie.css';
import 'aos/dist/aos.css';
import Aos from 'aos';

export const Movie = ({ movie, onClick, getMovieDesc }) => {
    let [movieDesc, setMovieDesc] = useState(null);
    let [error, setError] = useState(null);
    let [loaded, setLoaded] = useState(false);

    const movieInfo = movie;

    const id = movie.filmId;
    const name = movie.nameRu;
    const foto = movie.posterUrl;
    const rating = movie.rating;
    const genres = movie.genres;
    const genresStr = genres.map((a) => Object.values(a)).join(', ');

    const ratingColor = rating < 5 ? '_red' : rating < 8 && rating >= 5 ? '_yellow' : '_green';
 

    /* Добавляем анимацию появления элементов */
    useEffect(() => {
        Aos.init({ duration: 300 });
    }, []);

    const handleClick = () => {
        onClick(movieInfo) /* поднимаем наверх объект с инфой, чтобы передать фото, имя и тд в AboutFilm  */

        //Насть, из-за передачи по клику походу и пошла проблема в AboutFilm, наверное, лучше создать функцию и записать в стейт (по аналогии с getMovieDesc строка 47 здесь).
    }

    /* Получение данных для hover */
    const fetchAdditionalData = async (id) => { 
            try {
                const result = await getFilmData(id);
                setMovieDesc(result);
            } catch (error) {
                setError(error.message);
                // console.log('error: ', error);
            }
            setLoaded(true); 
        // console.log('movieDesc: ', movieDesc);
    }

    useEffect(() => {
        getMovieDesc(movieDesc); // Передаем данные о фильме в функцию, чтобы поднять их наверх по компонентам и не вызывать апи заново в карточке фильма
    })



    return (
        <div className='movie' onClick={handleClick}>
            <img alt={name} src={foto}
                data-aos='fade-zoom-in' /* Анимация библиотеки Aos */
                data-aos-delay='200'
                data-aos-offset='0'
                onMouseOver={movieDesc ? null : () => fetchAdditionalData(id)}  // поставила проверочку, чтобы запрос делался только 1 раз 🥺
                className={'movie__img'}
            />
            <div className='movie__dark_hover'></div>
            <div className='movie__description'>
                <p className='movie__name text-movie'>{name}</p>
                <p className={'movie__rating' + ratingColor}>{rating}</p>
                <p className='movie__genre text-movie'>{genresStr}</p>
            </div>
            <div className={'movie__hoverDesc'}>
                <MovieDesc movieDesc={movieDesc} />
            </div>
        </div>
    );
}