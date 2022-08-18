/*************  НЕ ИСПОЛЬЗУЕТСЯ ПОКА ЧТО ****************/

/* получить список фильмов по ключевым словам */
/* 
import { API_KEY, API_URL } from '../constants';

export const getTopFilms = async(page = 1) => {
    const url = typeof(page) === 'number' ? `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=${page}` : page;
    const result = await fetch(url, {
        method: 'GET',
        headers: {
            'X-API-KEY': API_KEY,
            'Content-Type': 'application/json',
        },
    });
    return result.json();
};

export const getFilmData = async(id) => {
    try {
        const result = await fetch(`${API_URL}/films/${id}`, {
            method: 'GET',
            headers: {
                'X-API-KEY': API_KEY,
                'Content-Type': 'application/json',
            },
        });
        return result.json();
    } catch (error) {
        return {};
    }
}; */