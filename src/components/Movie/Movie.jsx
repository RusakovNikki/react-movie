import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { fetchData } from '../../utils/requests';
import { API_URL } from "../../constants";

import { MovieDesc } from '../MovieDesc/MovieDesc';
import './Movie.css';
import 'aos/dist/aos.css';
import Aos from 'aos';

export const Movie = ({ movie, onClick }) => {
    let [detailedMovie, setMovieDesc] = useState(null);
    let [error, setError] = useState(null);
    let [loaded, setLoaded] = useState(false);


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
        onClick(detailedMovie) /* поднимаем наверх объект с инфой, чтобы передать фото, имя и тд в AboutFilm  */
    }

    /* Получение данных для hover */
    const asyncFetch = async (id) => {
        const url = `${API_URL}/films/${id}`;
        try {
            const result = await fetchData(url); // этот запрос дает нам расширенную инфу по конкретному фильму, поэтому сохраняем ответ с сервера и передаем по клику в AboutMovie
            setMovieDesc(result);
        } catch (error) {
            setError(error.message);
            // console.log('error: ', error);
        }
        setLoaded(true);
        // console.log('detailedMovie: ', detailedMovie);
    }

    return (
        <div className='movie' onClick={handleClick} onMouseOver={detailedMovie ? null : () => asyncFetch(id)} >  {/*  поставила проверочку, чтобы запрос делался только 1 раз 🥺 */}
            <div className='movie__dark_hover'></div>
            <img alt={name} src={foto}
                data-aos='fade-zoom-in' /* Анимация библиотеки Aos */
                data-aos-delay='200'
                data-aos-offset='0'
                className={'movie__img'}
            />
            <div className='movie__description'>
                <p className='movie__name text-movie'>{name}</p>
                <p className={'movie__rating' + ratingColor}>{rating}</p>
                <p className='movie__genre text-movie'>{genresStr}</p>
            </div>
            <div className={'movie__hoverDesc'}>
                <MovieDesc detailedMovie={detailedMovie} />
            </div>
        </div>
    );
}