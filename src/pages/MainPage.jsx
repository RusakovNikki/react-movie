import React from 'react';
import '../css/MainPage.css'
import Slider from '../components/Slider.jsx'
import TopMovies from '../components/TopMovies';

const MainPage = () => {
  return (
    <div className='pageBody'>
      <Slider/>
      <TopMovies />
    </div>
  );
};

export default MainPage;