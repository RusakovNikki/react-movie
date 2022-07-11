import React from "react";
import '../css/MovieDesc.css';
import { useGetDescription } from "../hooks/useGetDescription";

const MovieDesc = (props) => {
    const {
        items: items
    } = useGetDescription(props.id);

    let {
        description,
        ratingImdb: imdbRate,
        ratingKinopoisk: kpRate,
        year,
        filmLength,
    } = items;

    return (
        <div className='description'>
            <div className="description__text">Описание: {description}</div>
            <div className="description__kpRate">Кинопоиск: {kpRate}</div>
            <div className="description__imdbRate">IBDb:{imdbRate}</div>
            <div className="description__year">Год выпуска: {year}</div>
            <div className="description__duration">Длительность: {filmLength} мин</div>
        </div>
    );
}

export default MovieDesc;