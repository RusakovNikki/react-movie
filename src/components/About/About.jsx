import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from '../../utils/requests';
import s from './About.module.css';
import { API_URL } from "../../constants";

export const About = ({ detailedMovie }) => {
 
    const [about, setAbout] = useState(null);
    const { id } = useParams();
    const url = `${API_URL}/films/${id}/box_office`;

    useEffect(() => { 
        const asyncFetch = async (url) => {
            const about = await fetchData(url);
            if (about) setAbout(about);
        }
        asyncFetch(url);
    }, [url]);


    if (about) {   //Условие нужно, чтобы не падать в ошибку, так как изначально все переменные в верстке не существуют до тех пор, пока пользователь не наведет на него мышкой

        const findWorldwideGain = about.items.find(item => { //Может вы знаете, почему, если сразу задать функцию к переменной, то возвращается объект, а не значение (пишу item.amount).
            if (item.type === 'WORLD') {                     //В логе выводит значение, а в ретурне - объект. 
                return item;
            }
        });

        /* Вынесла данные из апи в отдельные переменные, изменила то, что будет выводиться, так как была ошибка. */

        if (about && about.items.length === 0) {
            return (
                <div className={s.about__data}>
                    <p className={s.about__noData}>Нет информации о бюджете для данного фильма 😢</p>
                </div>
            )
        } else {
            let marketingBudget;
            let currencySymbol = about.items[0].symbol;
            let budget = about.items[0].amount; //Написать алгоритм для разделения разрядов чисел 1 000 000
            if (about.length > 1) {
                marketingBudget = about.items[1].amount;
            }

            let worldwideGain = findWorldwideGain.amount;

            return (
                <div className={s.about__data}>
                    <p>Бюджет составляет: {budget} {currencySymbol}</p>
                    <p>Бюджет, потраченный на маркетинговые кампании: {marketingBudget} {currencySymbol} </p>
                    <p>Сборы по всему миру составляют: {worldwideGain} {currencySymbol}</p>
                    <p className={s.about__desc}>{detailedMovie.description}</p>
                </div>
            );
        }
    }


}

