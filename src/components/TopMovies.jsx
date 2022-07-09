import React from 'react';
import Movie from './Movie';
import '../css/TopMovies.css'

class TopMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      films: {}
    };
  }

  componentDidMount() {
    const URL = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top';
    fetch(URL, {
      method: 'GET',
      headers: {
        'X-API-KEY': 'ef6ec7cf-6925-4368-87f7-7f919e3b26c1',
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            films: result.films
          });
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, films } = this.state;
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      console.log(films)
      return (
        <div className='container'>

          <div className='topMovies'>
            {films.map(film => (

              <Movie
                key={film.filmId}
                name={film.nameRu}
                rating={film.rating}
                genres={film.genres}
                foto={film.posterUrl}
              />
            ))}
          </div>
        </div>
      );
    }
  }
}


export default TopMovies;