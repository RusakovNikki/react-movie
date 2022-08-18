import React, { useState, useEffect } from 'react';
import { fetchAbout } from '../../utils/requests';

export const About = ({ id/* ,about */ }) => {

    let [about, setAbout] = useState(null);

    useEffect(() => {
        /*  const about =  fetchAbout(id);
         setAbout(about); */
        const fetchAdditionalData = async () => {
            const about = await fetchAbout(id);
            setAbout(about);
        }
        fetchAdditionalData();
    }, [id]);


    console.log("about", about);
    return (
        <div>About</div>
    );
}


