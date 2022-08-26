import { getShortDesc } from './functions/getShortDesc';
import s from './MovieDesc.module.css';

export const MovieDesc = ({ movieDesc }) => {
    /* console.log('movieDesc', movieDesc); */
    if (movieDesc !== null) {
        return (
            <div className={s.description}>
                <div className={s.description__text}>Описание: {getShortDesc(movieDesc.description)}</div>
                <div className={s.description__kpRate}>Кинопоиск: {movieDesc.ratingKinopoisk}</div>
                <div className={s.description__imdbRate}>IMDb: {movieDesc.ratingImdb}</div>
                <div className={s.description__year}>Год выпуска: {movieDesc.year}</div>
                <div className={s.description__duration}>Длительность: {movieDesc.filmLength} мин</div>
            </div>
        );
    }
}