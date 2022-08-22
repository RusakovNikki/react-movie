
import React, { useState, useEffect } from 'react';
import s from './Fact.module.css';
import { getFacts } from './getFacts';

export const Fact = ({ id/* , facts */ }) => {

    let [facts, setFacts] = useState(null);

    /* 
        useEffect(() => {
            /*  const facts = getFacts(id);
             setFacts(facts); 
    const fetchAdditionalData = async () => {
        const facts = await getFacts(id);
        setFacts(facts);
    }
    fetchAdditionalData();
}, [id]); */

    console.log("facts", facts);

    return (
        <div>Fact</div>
        /*     <div className={s.fact__wrapper}>
                <p className={s.fact__item}>{facts}</p>
            </div> */
    );
}


