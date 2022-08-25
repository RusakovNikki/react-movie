import React from 'react';
import { Trailer } from '../Trailer/Trailer';
import { Awards } from '../Awards/Awards';
import { About } from '../About/About';
import { Fact } from '../Fact/Fact';
import s from './AboutMovie.module.css';
import { useEffect } from 'react';

export const AboutMovie = ({ movie, movieDesc }) => {
    /* используем веб-хранилище localstorage для хранение информации о фильме при перезагрузке страници */
    /* Никита */
    
    let movieSafe = JSON.stringify(movie) !== '{}' ? /* записываем объект в веб-хранилище и возвращаем его в movieSafe при перезагрузки */
        localStorage.setItem('movie', JSON.stringify(movie)) :
        JSON.parse(localStorage.getItem('movie'))

    const movieCurrent = JSON.stringify(movie) !== '{}' ? movie : movieSafe /* если нет данных, то movie пустой, а {} === true, поэтому делаю такою проверку */
    const id = movieCurrent.id
    const name = movieCurrent.name
    const foto = movieCurrent.foto
    const rating = movieCurrent.rating
    const genresStr = movieCurrent.genresStr.map(a => Object.values(a)).join(", ");

    return (
        <div className={s.aboutMovie__wrapper}>
            <div className={s.aboutMovie__info}>
                <div className={s.aboutMovie__imgWrapper}>
                    <img className={s.aboutMovie__img} src={foto} />
                </div>
                <div className={s.aboutMovie__textData}>
                    <div className={s.aboutMovie__name}>{name}</div>
                    <div className={s.aboutMovie__rate}>{rating} </div>
                    <div className={s.aboutMovie__genres}>{genresStr} </div>
                    <About id={id} movieDesc={movieDesc} />
                </div>
            </div>
            <div className={s.aboutMovie__additionalData}>
                <Trailer />
                <Awards />
                <Fact />
            </div>
        </div>
    );
}

