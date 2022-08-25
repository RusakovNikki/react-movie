
import { Searching } from '../Search/Searching';
import logo from './img/logo.png'
import './Header.css'

import { Link } from "react-router-dom";

export const Header = ({ onSearch }) => {

    return (
        <header className="header">
            <div className='header__body'>
                <div className="header__logo"> 
                    <Link className="header__link" to='/'>
                        <img src={logo} alt="logo" className='header__logo-item logo-item' />
                        <span>Главная</span>
                    </Link>
                </div>
                <Searching onSearch={onSearch} />  {/* если пользователь что-то вводит в поисковую строку, меняется ссылка для Main (Настя) */}
            </div>
        </header>

    );
}