import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from '../../utils/requests';
import s from './About.module.css';
import { API_URL } from "../../constants";
import { NotFoung } from './NotFound';

export const About = ({ detailedMovie }) => {

    const [about, setAbout] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const asyncFetch = async (id) => {
            const url = `${API_URL}/films/${id}/box_office`;
            const data = await fetchData(url);
            if (data) setAbout(data);
        }
        asyncFetch(id);
    }, [id]);


    if (about) {   //Условие нужно, чтобы не падать в ошибку, так как изначально все переменные в верстке не существуют до тех пор, пока пользователь не наведет на него мышкой

        const findWorldwideGain = about.items.find(item => { //Может вы знаете, почему, если сразу задать функцию к переменной, то возвращается объект, а не значение (пишу item.amount).
            //В логе выводит значение, а в ретурне - объект. 
            const type = item.type; 
            return type === 'WORLD';

        }); 

        /* Вынесла данные из апи в отдельные переменные, изменила то, что будет выводиться, так как была ошибка. */

        if (about && about.items.length === 0) {
            return <NotFoung />
        }


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

