import React from 'react';
import { Trailer } from '../Trailer/Trailer';
import { Awards } from '../Awards/Awards';
import { About } from '../About/About';
import { Fact } from '../Fact/Fact';
import s from './AboutMovie.module.css';

export const AboutMovie = ({ movie, movieDesc }) => {
    const id = movie.id
    const name = movie.name
    const foto = movie.foto
    const rating = movie.rating
    const genresStr = movie.genresStr;  //Нужна эта переменная?

    return (
        <div className={s.aboutMovie__wrapper}>
            <div className={s.aboutMovie__info}>
                <div className={s.aboutMovie__imgWrapper}>
                    <img className={s.aboutMovie__img} src={foto} />
                </div>
                <div className={s.aboutMovie__textData}>
                    <div className={s.aboutMovie__name}>{name}</div>
                    <div className={s.aboutMovie__rate}>{rating} </div>
                    <About id={id} movieDesc={movieDesc} />
                </div>
            </div>
            <Trailer id={id} />
            <Awards id={id} />
            <Fact id={id} />
        </div>
    );
}

