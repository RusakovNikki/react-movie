import React from 'react';
import '../css/MainPage.css';
import Slider from '../components/Slider.jsx';
import { TopMovies } from '../components/TopMovies';

const MainPage = (props) => {
  return (
    <div className='pageBody'>
      <Slider />
      <TopMovies  error={props.error} loaded={props.loaded} films={props.films} scrolled={props.scrolled} counter={props.counter} searching={props.searching}/>
    </div>
  );
};

export default MainPage;
