import { useState, useEffect } from "react";

export function useGetDescription() {

    const API_DESC_URL = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/301';

    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${API_DESC_URL}`, {
                method: 'GET',
                headers: {
                    'X-API-KEY': '6189fc94-f92f-49e4-add4-368fbca3c2e0',
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