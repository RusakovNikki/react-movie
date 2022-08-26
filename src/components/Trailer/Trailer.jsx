import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getTrailer } from './getTrailer';
import s from './Trailer.module.css';
import { API_URL } from "../../constants";

export const Trailer = () => {
    let [trailer, setTrailer] = useState(null);
    const { id } = useParams();
    const url = `${API_URL}/films/${id}/videos`;

    useEffect(() => {
        const fetchAdditionalData = async (url) => {
            const trailer = await getTrailer(url);
            setTrailer(trailer);
        }
        fetchAdditionalData(url);
    }, [url]);
 
    return (trailer && // поставила такую проверку, чтобы пустое окошко без трейлера не выводилось
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


