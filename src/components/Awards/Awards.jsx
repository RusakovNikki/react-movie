import s from './Awards.module.css';
import React, { useState, useEffect } from 'react';
import { getAwards } from './getAwards';
import { Award } from '../Award/Award';
import { getRandomId } from '../../functions/getRandomId';

export const Awards = ({ id }) => {
    let [awards, setAwards] = useState(null);

    /* Нам точно нужна такая конструкция с fetchAdditionalData? (Настя). Вроде бы да, так как иначе возвращается промис (Юля)*/

    useEffect(() => {
        const fetchAdditionalData = async (id) => {
            const awards = await getAwards(id);
            if (awards) setAwards(awards);
        }
        fetchAdditionalData(id);
    }, [id]);

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
                        key={getRandomId(1, 1000)}
                        award={award}
                    />
                )
            })}
        </div>
    );
}

