import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import { Movies } from "./Movies/components/Movies";
import { AboutMovie } from "./AboutMovie/AboutMovie";

export const Main = ({ url }) => {

    const [currMovie, setCurrMovie] = useState({}); // фильм, на который кликнули

    const handleClick = (movie) => {
        setCurrMovie(movie)
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={
                    <Movies url={url} onClick={handleClick} />
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

