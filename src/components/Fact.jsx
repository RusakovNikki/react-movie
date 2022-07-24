import React from 'react';
import s from '../css/Fact.module.css';

const Fact = (props) => {

    return (
        <div className={s.fact__wrapper}>
            <p className={s.fact__item}>{props.facts}</p>
        </div>
    );
}

export default Fact;

