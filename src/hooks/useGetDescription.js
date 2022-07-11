import { useState, useEffect } from "react";

export function useGetDescription(id) {

    const API_DESC_URL = `https://kinopoiskapiunofficial.tech/api/v2.2/films/`;

    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${API_DESC_URL}${id}`, {
                method: 'GET',
                headers: {
                    'X-API-KEY': '6189fc94-f92f-49e4-add4-368fbca3c2e0', //6189fc94-f92f-49e4-add4-368fbca3c2e0  cc5bbf2a-79b9-4de6-a091-234be04f22a8
                    'Content-Type': 'application/json',
                }
            })
                .then(res => res.json())
                .catch(err => console.log(err))
            setItems(response);
        }
        fetchData();

    }, [])


    return {
        items
    }
}