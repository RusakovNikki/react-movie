import React, { useState, useEffect } from 'react';
import { getTrailer } from './getTrailer';

export const Trailer = ({ id, /* trailer */ }) => {

    let [trailer, setTrailer] = useState(null);

    useEffect(() => {
        const fetchAdditionalData = async () => {
            const trailer = await getTrailer(id);
            setTrailer(trailer);
        }
        fetchAdditionalData();
    }, [id]);

    console.log(trailer);

    return (
        <div>Trailer {trailer}</div >
    );
}


