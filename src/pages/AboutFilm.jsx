import { getTopFilms, getFilmData } from '../utils/api';
import React, { useEffect } from 'react'

const AboutFilm = (props) => {
    let [correctId, setId] = props.correctFilmId;
    const [error, setError] = props.error;
    const [loaded, setLoaded] = props.loaded;
    //   const [films, setFilms] = props.films;
    let URL = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${correctId}/box_office`;

    useEffect(() => {
        fetchFilms()
    },[correctId])

    const result = []
    async function fetchFilms() {
        try {
            result = await getTopFilms(URL);
            console.log(result.items);
        } catch (error) {
            setError(error.message);
        }
        setLoaded(true);
    }
    
    return (
        <div>
            <p>Бюджет составляет {result.items[0].amount}{result.items[0].symbol}</p>
            <p>Сборы в стране производства составляют {result.items[1].amount}{result.items[0].symbol}</p>
            <p>Сборы по всему миру составляют {result.items[2].amount}{result.items[0].symbol}</p>
        </div>
    )
}

export default AboutFilm
