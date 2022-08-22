
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getFilmData } from '../../utils/requests';
import { MovieDesc } from '../MovieDesc/MovieDesc';
import s from './Movie.module.css';

export const Movie = ({ id, name, foto, rating, genresStr, extra, onClick }) => {
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

    const handleClick = () => {
        onClick(movieInfo) /* поднимаем наверх объект с инфой, чтобы передать фото, имя и тд в AboutFilm  */
    }


    const fetchAdditionalData = async (id) => {
        try {
            const result = await getFilmData(id);
            setMovieData(result);
        } catch (error) {
            setError(error.message);
        }
        setLoaded(true);
    }

    return (
        <div className={s.movie} onClick={handleClick}>
            <img className={s.movie__img} alt={name} src={foto} onMouseOver={() => fetchAdditionalData(id)} />

            <div className={s.movie__dark__hover}></div>
            <div className={s.movie__description}>
                <p>{name}</p>
                <p className={s.movie__rating}>{rating}</p>
                <p className={s.movie__genre}>{/* {genresStr} */}</p>
            </div>
            <div className={s.movie__hoverDesc}>
                <MovieDesc movieData={movieData} />
            </div>
        </div>
    );
}

