import React, { useState } from 'react'
import './Searching.css'

export const Search = ({ onSearch }) => {
    const [search, setSearch] = useState(null);
    const searchURL = `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword`;

    const handleChange = (event) => {
        const input = event.target.value;
        setSearch(input);
    }

    const handleSubmit = (event) => {
        event.preventDefault(); /* чтобы страничка не перезагружалась */
        let url = '';
        if (search !== '') {
            url = `${searchURL}?keyword=${search}`;
        }
        onSearch(url);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleChange}
                    type='text'
                    placeholder='Поиск по фильмам'
                    className='header__search'>
                </input>
            </form>
        </>
    );
}