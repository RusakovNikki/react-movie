import { forwardRef } from 'react';
import { getShortDesc } from './functions/getShortDesc';
import s from './MovieDesc.module.css';



export const MovieDesc = forwardRef(({ movieData }) => {

    if (movieData !== null) {
        return (
            <div className={s.description}>
                <div className={s.description__text}>Описание: {getShortDesc(movieData.description)}</div>
                <div className={s.description__kpRate}>Кинопоиск: {movieData.ratingKinopoisk}</div>
                <div className={s.description__imdbRate}>IMDb: {movieData.ratingImdb}</div>
                <div className={s.description__year}>Год выпуска: {movieData.year}</div>
                <div className={s.description__duration}>Длительность: {movieData.filmLength} мин</div>
            </div>
        );
    }
})