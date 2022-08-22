import React, { useState, useEffect } from 'react';
import { getTrailer } from './getTrailer';
import s from './Trailer.module.css';

export const Trailer = ({ id }) => {
    let [trailer, setTrailer] = useState(null);

    useEffect(() => {
        const fetchAdditionalData = async (id) => {
            const trailer = await getTrailer(id);
            setTrailer(trailer);
        }
        fetchAdditionalData(id);
    }, [id]);

    console.log(id);
    console.log('Trailer: ', trailer);
    return (
        <div className={s.trailer__wrapper}>
            <div className={s.trailer__header}>
                Трейлер
            </div>
            <iframe
                width="720"
                height="450"
                src={trailer}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                className={s.trailer__player}>
            </iframe>
        </div >
    );
}


