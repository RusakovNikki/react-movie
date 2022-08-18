import { urlHeaders, API_URL } from '../../../../constants';

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