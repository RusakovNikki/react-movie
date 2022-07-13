import React from 'react';
import '../css/MainPage.css';
import Slider from '../components/Slider.jsx';
import { TopMovies } from '../components/TopMovies';

const MainPage = (props) => {
  return (
    <div className='pageBody'>
      <Slider />
      <TopMovies  error={props.error} loaded={props.loaded} films={props.films}/>
    </div>
  );
};

export default MainPage;
