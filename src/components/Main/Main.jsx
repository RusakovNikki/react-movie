import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import { Movies } from "../Movies/Movies";
import { AboutMovie } from "../AboutMovie/AboutMovie";

export const Main = ({ url, showElements, useSearch }) => {

    const [currMovie, setCurrMovie] = useState({}); // фильм, на который кликнули

    const handleClick = (movie) => {
        setCurrMovie(movie);
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={
                    <Movies url={url} onClick={handleClick} showElements={showElements} useSearch={useSearch}/>
                }>
                </Route>
                <Route path='/film/:id' element={
                    <AboutMovie movie={currMovie} />
                }>
                </Route>
            </Routes>
        </BrowserRouter>

    );
}

