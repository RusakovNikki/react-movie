import React, { useState } from 'react';


export const Searching = (props) => {

    const [search, setSearch] = useState('');
    const searchURL = `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword`;


    const handleChange = (event) => {
        const input = event.target.value;
        if (input) { // проверяем, что непустой ввод
            setSearch(input);
        }

        /* если ввод пустой, то выводим все фильмы */

    }
    const handleSubmit = (event) => {
        event.preventDefault(); /* чтобы страничка не перезагружалась */

        const url = `${searchURL}?keyword=${search}`;

        /* console.log(event)
        console.log(search)  */
        props.onSearch(url)

    }

    return <form onSubmit={handleSubmit}>
        <input
            onChange={handleChange}
            type='text'
            placeholder='Поиск по фильмам'>
        </input>
    </form>;

}