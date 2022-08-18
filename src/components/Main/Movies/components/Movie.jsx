
import React, { useState } from 'react';
import './../Movie.css';

export const Movie = ({ id, name, foto, rating, genresStr, extra, onClick }) => {

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
    
    return (
        <div className='movie' onClick={handleClick}>
            <img alt={name} src={foto} />

            <div className='movie__dark__hover'></div>
            <div className='movie__description'>
                <p>{name}</p>
                <p className={'movie__rating'}>{rating}</p>
                <p className='movie__genre'>{/* {genresStr} */}</p>
            </div>
            <div className='movie__hoverDesc'>
                {extra}
            </div>
        </div>
    );
}

