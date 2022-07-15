import '../css/Movie.css';
import MovieDesc from './MovieDesc';

export const Movie = (props) => {
  const genresStr = props.genres.map((a) => Object.values(a)).join(', ');

  let ratingColor = props.rating < 5 ? '--red':props.rating < 8 && props.rating >= 5? '--yellow' : '--green';
  return (
    <div className='movie'>
      <img alt={props.name} src={props.foto}></img>
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
