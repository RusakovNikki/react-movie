import { API_URL, urlHeaders } from "../constants";

/*Дополнительная информация на hover*/
/* мы каждый раз будем при наведении делать запрос?😿 (Настя) */
export const getFilmData = async(id) => {
    try {
        const result = await fetch(`${API_URL}/films/${id}`, {
            method: 'GET',
            headers: urlHeaders,
        });
        return result.json();
    } catch (error) {
        return {};
    }
};

/*Пункты 2.6-2.8 ТЗ Юля*/

export const fetchTrailer = async(id) => {
    try {
        const result = await fetch(`${API_URL}/films/${id}/videos`, {
            method: 'GET',
            headers: urlHeaders,
        });
        return result.json();
    } catch (error) {
        return {};
    }
};

export const fetchFacts = async(id) => {
    try {
        const result = await fetch(`${API_URL}/films/${id}/facts`, {
            method: 'GET',
            headers: urlHeaders,
        });
        return result.json();
    } catch (error) {
        return {};
    }
};

export const fetchAwards = async(id) => {
    try {
        const result = await fetch(`${API_URL}/films/${id}/awards`, {
            method: 'GET',
            headers: urlHeaders,
        });
        return result.json();
    } catch (error) {
        return {};
    }
};

/**Настя */
export const fetchAbout = async(id) => {
    const URL = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/box_office`;
    try {
        const result = await fetch(URL, {
            method: 'GET',
            headers: urlHeaders,
        });
        return result.json();
    } catch (error) {
        return {};
    }
};

/* получить список фильмов по ключевым словам
Эта функция нужна вообще? (Юля)
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
}; */