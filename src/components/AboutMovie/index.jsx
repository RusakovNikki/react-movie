import React from 'react';
import { Trailer } from './components/Trailer';
import { Awards } from './components/Awards';
import { About } from './components/About';
import { Fact } from './components/Fact';
import s from './AboutMovie.module.css'; 

export const AboutMovie = ({ movie }) => {
    /* используем веб-хранилище localstorage для хранение информации о фильме при перезагрузке страници */
    /* Никита */
    
    let movieSafe = JSON.stringify(movie) !== '{}' ? /* записываем объект в веб-хранилище и возвращаем его в movieSafe при перезагрузки */
        localStorage.setItem('movie', JSON.stringify(movie)) :
        JSON.parse(localStorage.getItem('movie'))

    const currMovie = JSON.stringify(movie) !== '{}' ? movie : movieSafe /* если нет данных, то movie пустой, а {} === true, поэтому делаю такою проверку */
    const id = currMovie.filmId
    const name = currMovie.nameRu
    const foto = currMovie.posterUrl
    const rating = currMovie.rating
    const genresStr = currMovie.genres.map(a => Object.values(a)).join(", ");

    return (
        <div className={s.aboutMovie__wrapper}>
            <div className={s.aboutMovie__info}>
                <div className={s.aboutMovie__imgWrapper}>
                    <img alt='about' className={s.aboutMovie__img} src={foto} />
                </div>
                <div className={s.aboutMovie__textData}>
                    <div className={s.aboutMovie__name}>{name}</div>
                    <div className={s.aboutMovie__rate}>{rating} </div>
                    <div className={s.aboutMovie__genres}>{genresStr} </div>
                    <About id={id} detailedMovie={currMovie} />
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

