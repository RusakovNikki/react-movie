/* import { getTrailer } from './functions/getTrailer';
import { getFacts } from './functions/getFacts';
import { getAwards } from './functions/getAwards';
import { fetchAbout } from './utils/requests'; */

import React, { useState, useEffect } from 'react';
import { Trailer } from '../Trailer/Trailer';
import { Awards } from '../Awards/Awards';
import { About } from '../About/About';
import { Fact } from '../Fact/Fact';
import s from './AboutMovie.module.css';

export const AboutMovie = ({ movie }) => {

    const id = movie.id
    const name = movie.name
    const foto = movie.foto
    const rating = movie.rating
    const genresStr = movie.genresStr
    /* Получить дополнительную информацию по фильму */

    // мб разбросать стейты по компонентам и не держать их тут? *Настя*

    // let [trailer, setTrailer] = useState(null);
    // let [facts, setFacts] = useState(null);
    // let [awards, setAwards] = useState(null);
    // let [about, setAbout] = useState(null);


    /* делаем запрос на сервер для отображения данных по одному фильму */
    /* Юля */
    /*  useEffect(() => {
         const fetchAdditionalData = async () => {
 
 
             // const trailer = await getTrailer(id);
             // const facts = await getFacts(id);
             // const awards = await getAwards(id);
             // const about = await fetchAbout(id);
             // setTrailer(trailer);
             // setFacts(facts);
             // setAwards(awards);
             // setAbout(about);
         }
 
         if (id) fetchAdditionalData();
     }, [id]); */


    return (
        <div className={s.aboutMovie__wrapper}>
            <div className={s.aboutMovie__info}>
                <div className={s.aboutMovie__imgWrapper}>
                    <img className={s.aboutMovie__img} src={foto} />
                </div>
                <div className={s.aboutMovie__textData}>
                    <div className={s.aboutMovie__name}>{name}</div>
                    <div className={s.aboutMovie__rate}>{rating} </div>
                    <About id={id} />
                </div>
            </div>
            <Trailer id={id} />
            <Awards id={id} /* awards={awards} */ />

            <Fact id={id} /* facts={facts} */ />
        </div>
    );
}

