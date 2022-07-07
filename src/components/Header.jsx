import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

const Header = () => {
  return (
    <div className='headerContainer'>
      <div className='menuContainer'>
        <Link to='/'>Главная</Link>
      </div>
      <form className='searchInputContainer'>
        <input className='searchInput' type="text" placeholder="Поиск по фильмам"/>
      </form>
    </div>
  );
};

export default Header;