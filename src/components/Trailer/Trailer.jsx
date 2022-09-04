import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getTrailer } from './getTrailer';
import s from './Trailer.module.css';
import { API_URL } from "../../constants";

export const Trailer = () => {
    let [trailer, setTrailer] = useState(null);
    const { id } = useParams();
    
    useEffect(() => {
        const asyncFetch = async (id) => {
            const url = `${API_URL}/films/${id}/videos`;
            const trailer = await getTrailer(url);
            setTrailer(trailer);
        }
        asyncFetch(id);
    }, [id]);

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


