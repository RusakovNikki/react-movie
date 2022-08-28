import { Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import { Movies } from "../Movies/Movies";
import { AboutMovie } from "../AboutMovie/AboutMovie";

export const Main = ({ url, onScroll }) => {
    const [detailedMovie, setMovieDesc] = useState(null);
    const [currMovie, setCurrMovie] = useState({}); // фильм, на который кликнули

    const handleClick = (movie) => {
        setCurrMovie(movie);
    }

    //Функция нужна для записи в стейт описания фильма, которое получаем из апи в другой компоненте, чтобы несколько раз не делать вызов (Юля)

   /*  const getMovieDesc = (value) => {
        if (value && value !== null)
            setMovieDesc(value.description);
    } */

    return (
    <main className="main">
        <Routes>
            <Route path='/' element={
                <Movies url={url} onClick={handleClick} onScroll={onScroll} /* getMovieDesc={getMovieDesc} */ />
            }>
            </Route>
            <Route path='/film/:id' element={
                <AboutMovie movie={currMovie} /* detailedMovie={detailedMovie} */ />
            }>
            </Route>
        </Routes>
    </main>
    );
}

