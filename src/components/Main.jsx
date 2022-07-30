import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../css/Main.css';
import MainPage from './MainPage';
import AboutFilm from './AboutFilm';

const Main = ({ error, loaded, films, searching, trailers, facts, awards }) => {
    // console.log(films)
    return (
        <div className='background-main'>
            <Routes>
                <Route path='/' element={
                    <MainPage
                        error={error}
                        loaded={loaded}
                        films={films}
                        searching={searching} />} />
                <Route path='/film/:id' element={
                    <AboutFilm
                        films={films}
                        trailers={trailers}
                        facts={facts}
                        awards={awards} />} />
            </Routes>
        </div>
    );
};

export default Main;