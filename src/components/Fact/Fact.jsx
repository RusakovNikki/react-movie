
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getRandomId } from '../../functions/getRandomId';
import uniqid from 'uniqid';
import s from './Fact.module.css';
import { getFacts } from './getFacts';

export const Fact = () => {
    let [facts, setFacts] = useState(null);
    const { id } = useParams()

    useEffect(() => {
        const fetchAdditionalData = async () => {
            const facts = await getFacts(id);
            if (facts) setFacts(facts);
        }
        fetchAdditionalData();
    }, [id]);

    if (facts) {
        return (
            <div className={s.fact__wrapper}>
                <div className={s.fact__header}>
                    Факты о фильме
                </div>
                {facts.map(fact => (
                    <p
                        key={uniqid()}
                        className={s.fact__item}
                    >
                        {fact}
                    </p>
                ))
                }
            </div>
        );
    }
}


