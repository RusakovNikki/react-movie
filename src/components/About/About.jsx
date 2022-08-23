import React, { useState, useEffect } from 'react';
import { fetchAbout } from '../../utils/requests';
import s from './About.module.css';

export const About = ({ id, movieDesc }) => {

    let [about, setAbout] = useState(null);

    useEffect(() => {
        const fetchAdditionalData = async (id) => {
            const about = await fetchAbout(id);
            setAbout(about);
            console.log(about);
        }
        fetchAdditionalData(id);
    }, [id]);


    if (about && about != null) {   //Условие нужно, чтобы не падать в ошибку, так как изначально все переменные в верстке не существуют до тех пор, пока пользователь не наведет на него мышкой

        const findWorldwideGain = about.items.find(item => { //Может вы знаете, почему, если сразу задать функцию к переменной, то возвращается объект, а не значение (пишу item.amount).
            if (item.type === 'WORLD') {                     //В логе выводит значение, а в ретурне - объект. 
                return item;
            }
        });

        /* Вынесла данные из апи в отдельные переменные, изменила то, что будет выводиться, так как была ошибка. */

        let dollarSymbol = about.items[0].symbol;
        let budget = about.items[0].amount; //Написать алгоритм для разделения разрядов чисел 1 000 000
        let marketingBudget = about.items[1].amount;
        let worldwideGain = findWorldwideGain.amount;

        return (
            <div className={s.about__data}>
                <p>Бюджет составляет: {budget}{dollarSymbol}</p>
                <p>Бюджет, потраченный на маркетинговые кампании: {marketingBudget}{dollarSymbol} </p>
                <p>Сборы по всему миру составляют: {worldwideGain}{dollarSymbol}</p>
                <p className={s.about__desc}>{movieDesc}</p>
            </div>
        );
    }


}

