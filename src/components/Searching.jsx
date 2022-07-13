import React, { useState } from 'react'
import '../css/Header.css';
import { getTopFilms, getFilmData } from '../utils/api';

const apiTimeout = (i) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        return resolve();
      }, 200 * i);
    });
  };

const Searching = (props) => {
    const [error, setError] = props.error;
    const [loaded, setLoaded] = props.loaded;
    const [films, setFilms] = props.films;
    const [value, setValue] = useState('')

    const requestSearch = (e) => {
        let urlSearch = `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${value}`
        fetchFilms(urlSearch);
    }
    async function fetchFilms(urlSearch) {
        try {
            const result = await getTopFilms(urlSearch);
            const data = await Promise.all(
                result.films.map(async (film, i) => {
                    await apiTimeout(i);
                    const extra = await getFilmData(film.filmId);
                    return { ...film, extra };
                }),
            );
            setFilms([...data]);
            console.log(typeof films);
            console.log(typeof data);
        } catch (error) {
            setError(error.message);
        }
        setLoaded(true);
    }
    return (
        <div>
            <form
                className='searchInputContainer'
                onSubmit={event => {
                    debugger
                    event.preventDefault()

                    requestSearch()
                }}>
                <input
                    onChange={event => {
                        setValue(event.target.value)
                    }}
                    className='searchInput'
                    type="text"
                    placeholder="Поиск по фильмам"
                    value={value} />
            </form>

        </div>
    )
}

export default Searching
