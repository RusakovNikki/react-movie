import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getTrailer } from './getTrailer';
import s from './Trailer.module.css';

export const Trailer = () => {
    let [trailer, setTrailer] = useState(null);
    const { id } = useParams()

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
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={s.trailer__player}>
            </iframe>
        </div >
    );
}


