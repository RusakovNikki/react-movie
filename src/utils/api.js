import { getCurrentMonth } from "../functions/getCurrentMonth";

const API_URL = 'https://kinopoiskapiunofficial.tech/api/v2.2';
//const API_KEY = 'cc5bbf2a-79b9-4de6-a091-234be04f22a8';
//const API_KEY = 'cc5bbf2a-79b9-4de6-a091-234be04f22a8';
//const API_KEY = '954630cb-a912-442d-93bd-453fafd8d36b';
const API_KEY = '8c8e1a50-6322-4135-8875-5d40a5420d86';

export const getPremiers = async() => {
    const premiers = await fetch(`${API_URL}/films/premieres?year=${new Date().getFullYear()}&month=${getCurrentMonth()}`, {
        method: 'GET',
        headers: {
            'X-API-KEY': API_KEY,
            'Content-Type': 'application/json',
        }
    });
    return premiers.json();
}

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
};


/*Пункты 2.6-2.8 ТЗ Юля*/

export const getTrailers = async(id) => {
    try {
        const result = await fetch(`${API_URL}/films/${id}/videos`, {
            method: 'GET',
            headers: {
                'X-API-KEY': API_KEY,
                'Content-Type': 'application/json',
            }
        });
        return result.json();
    } catch (error) {
        return {};
    }
};

export const getFacts = async(id) => {
    try {
        const result = await fetch(`${API_URL}/films/${id}/facts`, {
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
};

export const getAwards = async(id) => {
    try {
        const result = await fetch(`${API_URL}/films/${id}/awards`, {
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
};