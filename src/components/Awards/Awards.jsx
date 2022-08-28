import s from './Awards.module.css';
import React, { useState, useEffect } from 'react';
import { getAwards } from './getAwards';
import { Award } from '../Award/Award'; 
import uniqid from 'uniqid';
import { useParams } from 'react-router-dom';
import { API_URL } from "../../constants";

export const Awards = () => {
    let [awards, setAwards] = useState(null);
    const { id } = useParams()
    const url = `${API_URL}/films/${id}/awards`; 

    useEffect(() => {
        const asyncFetch = async (url) => {
            const awards = await getAwards(url);
            if (awards) setAwards(awards);
        }
        asyncFetch(url);
    }, [url]);

    //Если у фильма нет наград, выведется сообщение

    if (awards && awards.length === 0) return (
        <div className={s.awards__wrapper}>
            <div className={s.awards__header}>Награды</div>
            <p className={s.awards__noAwards}>У данного фильма нет наград 😢</p>
        </div>
    )

    return (
        <div className={s.awards__wrapper}>
            <div className={s.awards__header}>Награды</div>

            {awards && awards.map((award) => {        /* Поставила проверку, что awards != null, потому что иногда почему-то null с сервера возвращается (Настя) */
                return (
                    <Award
                        key={uniqid()}
                        award={award}
                    />
                )
            })}
        </div>
    );
}

