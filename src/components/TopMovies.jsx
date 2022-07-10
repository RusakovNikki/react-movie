import React from 'react';
import Movie from './Movie';
import '../css/TopMovies.css'
import { useState } from 'react';
import { useEffect } from 'react';


class TopMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      films: [],
      counter: 1,
      scrolled: false
    };
  }
  
  componentDidMount = () => {this.viewTop()}

  viewTop() {
    this.setState({ counter: this.state.counter + 1 });
    console.log('componentDidMount()');
    const URL = `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=${this.state.counter}`;
    fetch(URL, {
      method: 'GET',
      headers: {
        'X-API-KEY': '8c8e1a50-6322-4135-8875-5d40a5420d86',
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            films: [...this.state.films, ...result.films]
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

    document.addEventListener('scroll', this.scrollHandler)

  }

  scrollHandler = (e) => {
    if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 300) {
      console.log(this.state.counter);
      if(!this.state.scrolled && this.state.counter <= 12) { // так как всего 250 фильмов, выводим по 20, значит 12 страниц
        this.viewTop();
        this.setState({ scrolled: true });
        setTimeout(() => {this.setState({ scrolled: false })}, 3000);
      }
    }
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