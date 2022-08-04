import React, { useState } from 'react'
import '../css/Header.css';
import { getTopFilms, getFilmData } from '../utils/api';
import apiTimeout from '../functions/apiTimeout'

const Searching = (props) => {
    const setError = props.error[1];
    const setLoaded = props.loaded[1];
    const setFilms = props.films[1];
    const [value, setValue] = useState('')
    const setSearching = props.searching[1];

    /* Функция для отображения фильмов из поиска */
    const requestSearch = (e) => {
        let urlSearch = `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${value}`;
        setLoaded(false)
        fetchFilms(urlSearch);
        setSearching(true)
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
                    event.preventDefault()
                    requestSearch()
                }}>
                <input
                    onChange={event => {
                        setValue(event.target.value)
                    }}
                    className='searchInput'
                    type='text'
                    placeholder='Поиск по фильмам'
                    value={value} />
            </form>

        </div>
    )
}

export default Searching
