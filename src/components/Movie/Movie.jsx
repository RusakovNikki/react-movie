import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getFilmData } from '../../utils/requests';
import { MovieDesc } from '../MovieDesc/MovieDesc';
import './Movie.css';
import 'aos/dist/aos.css';
import Aos from 'aos';

export const Movie = ({ id, name, foto, rating, genresStr, onClick, getMovieDesc }) => {
    let [movieData, setMovieData] = useState(null);
    let [error, setError] = useState(null);
    let [loaded, setLoaded] = useState(false);

    const movieInfo = {
        id: id,
        name: name,
        foto: foto,
        rating: rating,
        genresStr: genresStr
    }

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
            setMovieData(result);
        } catch (error) {
            setError(error.message);
            console.log('error: ', error);
        }
        setLoaded(true);
        console.log('MovieData: ', movieData);
    }

    useEffect(() => {
        getMovieDesc(movieData); // Передаем данные о фильме в функцию, чтобы поднять их наверх по компонентам и не вызывать апи заново в карточке фильма
    })

    genresStr = genresStr.map((a) => Object.values(a)).join(', ')

    /* Цвет кружочка рейтинга */
    let ratingColor = rating < 5 ? '_red' : rating < 8 && rating >= 5 ? '_yellow' : '_green';

    return (
        <div className='movie' onClick={handleClick}>
            <img alt={name} src={foto}
                data-aos='fade-zoom-in' /* Анимация библиотеки Aos */
                data-aos-delay='200'
                data-aos-offset='0'
                onMouseOver={() => fetchAdditionalData(id)}
                className={'movie__img'}
            />
            <div className='movie__dark_hover'></div>
            <div className='movie__description'>
                <p className='movie__name text-movie'>{name}</p>
                <p className={'movie__rating' + ratingColor}>{rating}</p>
                <p className='movie__genre text-movie'>{genresStr}</p>
            </div>
            <div className={'movie__hoverDesc'}>
                <MovieDesc movieData={movieData} />
            </div>
        </div>
    );
}