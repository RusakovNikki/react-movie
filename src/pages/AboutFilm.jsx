import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import { fetchTrailer } from "../functions/fetchTrailer";
import { fetchFacts } from "../functions/fetchFacts";
import Fact from "../components/Fact";
import { fetchAwards } from "../functions/fetchAwards";
import Award from "../components/Award";
import s from "../css/AboutFilm.module.css"

const AboutFilm = (props) => {
    const { id } = useParams();
    let [about, setAbout] = useState(null);
    let URL = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/box_office`;

    /*Получить дополнительную информацию по фильму*/
    let [trailers, setTrailers] = props.trailers;
    let [facts, setFacts] = props.facts;
    let [awards, setAwards] = props.awards;

    useEffect(() => {
        const fetchAdditionalData = async () => {
            const trailer = await fetchTrailer(id);
            const facts = await fetchFacts(id);
            const awards = await fetchAwards(id);
            setTrailers(trailer);
            setFacts(facts);
            setAwards(awards);
            console.log('Awards: ', awards);
        }
        fetchAdditionalData();
    }, []);

    /******************************************************/

    useEffect(() => {
        fetch(URL, {
            method: 'GET',
            headers: {
                'X-API-KEY': 'cc5bbf2a-79b9-4de6-a091-234be04f22a8', //6189fc94-f92f-49e4-add4-368fbca3c2e0  cc5bbf2a-79b9-4de6-a091-234be04f22a8 954630cb-a912-442d-93bd-453fafd8d36b 8c8e1a50-6322-4135-8875-5d40a5420d86
                'Content-Type': 'application/json',
            },
        })
            .then(resp => resp.json())
            .then(data => setAbout(data))

    }, [])

    return (
        <div className={s.wrapper}>
            {about && (
                <>
                    {console.log(about)}
                    <div className={s.about__dataWrapper}>
                        <div className={s.nastya}>
                            {
                                /* Настина часть 
                                Сюда можно вставить изображение фильма, а все остальное добавить в класс 
                                about__data */
                            }
                        </div>
                        <div className={s.about__data}>
                            <p>Бюджет составляет {about.items[0].amount} {about.items[0].symbol}</p>
                            <p>Сборы в стране производства составляют {about.items[1].amount} {about.items[1].symbol}</p>
                            <p>Сборы по всему миру составляют {about.items[2].amount} {about.items[2].symbol}</p>
                        </div>
                    </div>

                    <div className={s.element__container}>
                        <h2>Трейлер:</h2>
                        <iframe
                            className={s.trailer}
                            width="700"
                            height="460"
                            src={trailers}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </div>
                    <div className={s.element__container}>
                        <h2>Факты о фильме:</h2>
                        <div className={s.facts__container}>
                            {facts.map(fact => (
                                <Fact
                                    facts={fact}
                                />
                            ))}
                        </div>
                    </div>
                    <div className={s.element__container}>
                        <h2>Награды:</h2>
                        <p className={s.awards__total}>Всего наград: {awards.length}</p>
                        <div className={s.awards__wrapper}>
                            {awards.map(award => (
                                <Award
                                    name={award.name}
                                    nominationName={award.nominationName}
                                    imageUrl={award.imageUrl}
                                    year={award.year}
                                />
                            ))}
                        </div>
                    </div>

                </>
            )
            }

        </div >
    )
}

export default AboutFilm
