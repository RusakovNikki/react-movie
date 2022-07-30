import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';
import Searching from './Searching';

const Header = (props) => {
  return (
    <div className='background-header'>
      <div className='menuContainer'>
        <Link to='/'>Главная</Link>
      </div>
      <Searching error={props.error} loaded={props.loaded} films={props.films} searching={props.searching} />
    </div>
  );
};

export default Header;