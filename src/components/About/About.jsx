import React, { useState, useEffect } from 'react';
import { fetchAbout } from '../../utils/requests';
import s from './About.module.css';

export const About = ({ id/* ,about */ }) => {

    let [about, setAbout] = useState(null);

    useEffect(() => {
        const fetchAdditionalData = async () => {
            const about = await fetchAbout(id);
            setAbout(about);
        }
        fetchAdditionalData();
    }, [id]);


    console.log("about", about);
    return (
        <div className={s.about__data}>
            <p>Бюджет составляет {about.items[0].amount} {about.items[0].symbol}</p>
            <p>Сборы в стране производства составляют {about.items[1].amount} {about.items[1].symbol}</p>
            <p>Сборы по всему миру составляют {about.items[2].amount} {about.items[2].symbol}</p>
        </div>

    );
}


