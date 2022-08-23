import s from './Awards.module.css';
import React, { useState, useEffect } from 'react';
import { getAwards } from './getAwards';
import { Award } from '../Award/Award';

export const Awards = ({ id }) => {
    let [awards, setAwards] = useState(null);

    /* Нам точно нужна такая конструкция с fetchAdditionalData? (Настя) */

    useEffect(() => {
        const fetchAdditionalData = async (id) => {
            const awards = await getAwards(id);
            if (awards) setAwards(awards);
        }
        fetchAdditionalData(id);
    }, [id]);

    console.log('awards', awards);

    return (
        <div className={s.awards__wrapper}>
            <div className={s.awards__header}>Награды</div>
            {awards && awards.map((award) => {              /* Поставила проверку, что awards != null, потому что иногда почему-то null с сервера возвращается (Настя) */
                return (
                    <Award award={award} />
                )
            })}
        </div>
    );
}

