import '../css/Movie.css';
import MovieDesc from './MovieDesc';

export const Movie = (props) => {
  const genresStr = props.genres.map((a) => Object.values(a)).join(', ');

  return (
    <div className='movie'>
      <img alt={props.name} src={props.foto}></img>
      <div className='movie__description'>
        <p>{props.name}</p>
        <p>{props.rating}</p>
        <p> {genresStr}</p>
      </div>
      <div className='movie__hoverDesc'>
        <MovieDesc filmData={props.extra} />
      </div>
    </div>
  );
};
