import '../css/Movie.css';
import MovieDesc from './MovieDesc';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';

export const Movie = (props) => {

  useEffect(() => {
    Aos.init({ duration: 300 });
  }, []);

  const genresStr = props.genres.map((a) => Object.values(a)).join(', ');

  let ratingColor = props.rating < 5 ? '--red' : props.rating < 8 && props.rating >= 5 ? '--yellow' : '--green';
  return (
    <div className='movie'>
      <img alt={props.name} src={props.foto} 
        data-aos='fade-zoom-in'
        data-aos-easing='ease-in-back'
        data-aos-delay='100'
        data-aos-offset='0'/>
      <div className='movie__dark__hover'></div>
      <div className='movie__description'>
        <p>{props.name}</p>
        <p className={'movie__rating' + ' movie__rating' + ratingColor}>{props.rating}</p>
        <p className='movie__genre'>{genresStr}</p>
      </div>
      <div className='movie__hoverDesc'>
        <MovieDesc filmData={props.extra} />
      </div>
    </div>
  );
};
