import s from './Awards.module.css';
import React, { useState, useEffect } from 'react';
import { getAwards } from './getAwards';

export const Awards = ({ id/*,  awards */ }) => {
    let [awards, setAwards] = useState(null);

    /* Нам точно нужна такая конструкция с fetchAdditionalData? (Настя) */

    useEffect(() => {
        const fetchAdditionalData = async () => {
            const awards = await getAwards(id);
            if (awards) setAwards(awards);
        }
        fetchAdditionalData();
    }, [id]);

    console.log('awards', awards);

    return (
        <div>
            Awards
            {awards && awards.map((award) => { /* Поставила проверку, что awards != null, потому что иногда почему-то null с сервера возвращается (Настя) */

                return <p>{award.name}</p>

            })}
        </div>
        /*   <div className={s.award__wrapper}>
              <div className={s.award__imgWrapper}>
                  <img src={awards.imageUrl} alt='award img' className={s.award__img} />
              </div>
              <div className={s.award__desc}>
                  <p className={s.award__name}>{awards.name}</p>
                  <p className={s.award__nominationName}>'{awards.nominationName}'</p>
                  <p className={s.award__year}>{awards.year}</p>
              </div>
          </div> */
    );
}

