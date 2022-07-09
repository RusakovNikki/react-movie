import React from 'react';
import '../css/Movie.css'
 
const Movie = (props) => {  
  
  const genresStr = props.genres.map(a => Object.values(a)).join(", "); 
  return (
    <div className='movie'>
      <img alt={props.name} src={props.foto}></img>
      <div className='movie__description'> 
        <p>{props.name}</p>
        <p>{props.rating}</p>
        <p> {genresStr}</p>
      </div>
    </div>
  );
};

export default Movie;