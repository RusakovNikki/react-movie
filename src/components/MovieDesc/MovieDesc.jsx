import { getShortDesc } from './functions/getShortDesc';
import s from './MovieDesc.module.css';

export const MovieDesc = ({ detailedMovie }) => {  
    if (detailedMovie !== null) {
        return (
            <div className={s.description}>
                <div className={s.description__text}>Описание: {getShortDesc(detailedMovie.description)}</div>
                <div className={s.description__kpRate}>Кинопоиск: {detailedMovie.ratingKinopoisk}</div>
                <div className={s.description__imdbRate}>IMDb: {detailedMovie.ratingImdb}</div>
                <div className={s.description__year}>Год выпуска: {detailedMovie.year}</div>
                <div className={s.description__duration}>Длительность: {detailedMovie.filmLength} мин</div>
            </div>
        );
    }
}