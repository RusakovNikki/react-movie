
import React, { useState, useEffect } from 'react';
import { getRandomId } from '../../functions/getRandomId';
import s from './Fact.module.css';
import { getFacts } from './getFacts';

export const Fact = ({ id }) => {
    let [facts, setFacts] = useState(null);

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
                        key={getRandomId(1, 2000)}
                        className={s.fact__item}
                    >
                        {fact}
                    </p>
                ))
                }
            </div >
        );
    }
}


