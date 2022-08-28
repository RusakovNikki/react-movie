import { Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import { Movies } from "../Movies/Movies";
import { AboutMovie } from "../AboutMovie/AboutMovie";
import { Slider } from "../Slider/Slider";

export const Main = ({ url, onScroll }) => {
    const [detailedMovie, setMovieDesc] = useState(null);
    const [currMovie, setCurrMovie] = useState({}); // фильм, на который кликнули

    const handleClick = (movie) => {
        setCurrMovie(movie);
    }

    return (
        <main className="main">
            <Routes>
                <Route path='/' element={
                    <Movies url={url} onClick={handleClick} onScroll={onScroll} />
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

