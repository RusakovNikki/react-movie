
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import uniqid from 'uniqid';
import s from './Fact.module.css';
import { getFacts } from './functions/getFacts';
import { API_URL } from "../../../../constants";

export const Fact = () => {
    let [facts, setFacts] = useState(null);
    const { id } = useParams()
    
    useEffect(() => {
        const asyncFetch = async () => {
            const url = `${API_URL}/films/${id}/facts`;
            const data = await getFacts(url);
            if (data) setFacts(data);
        }
        asyncFetch();
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


