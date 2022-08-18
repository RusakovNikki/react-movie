import { getTrailer } from './functions/getTrailer';
import { getFacts } from './functions/getFacts';
import { getAwards } from './functions/getAwards';
import { fetchAbout } from './utils/requests';

import React, { useState, useEffect } from 'react';
import { Trailer } from './components/Trailer';
import { Awards } from './components/Awards';
import { About } from './components/About';
import { Fact } from './components/Fact';

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
             //   const about = await fetchAbout(id);
             // setTrailer(trailer);
             // setFacts(facts);
             // setAwards(awards);
             //  setAbout(about);
         }
 
         if (id) fetchAdditionalData();
     }, [id]); */


    return (
        <div className='AboutMovie'>
            <div>
                <div>{name}</div>
                <div>{foto}</div>
                <div>{rating} </div>
            </div>
            <Trailer id={id} /* trailer={trailer} */ />
            <Awards id={id} /* awards={awards} */ />
            <About id={id}  /* about={about} */ />
            <Fact id={id} /* facts={facts} */ />
        </div>
    );
}

