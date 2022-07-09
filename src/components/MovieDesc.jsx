import React from "react";
import '../css/MovieDesc.css';

const API_URL = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/';

const fetchData = async () => {
    const result = await fetch(`${API_URL}`);
    const data = await result.json();
    console.log(data);
}
fetchData();


const MovieDesc = (props) => {
    return (
        <div className='description'>
            <div className="description__text">ddfgdfg</div>
            <div className="description__kpRate">dfgdfg</div>
            <div className="description__imdbRate">dfgdfg</div>
            <div className="description__year">dfgdfg</div>
            <div className="description__duration">dfgdfg</div>
        </div>
    );
}

export default MovieDesc;