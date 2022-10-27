import { urlHeaders } from "../constants";

/* Делаем один fetch 😿 */
export const fetchData = async(url) => {
    try {
        const result = await fetch(url, {
            method: 'GET',
            headers: urlHeaders,
        });
        return result.json();
    } catch (error) {
        return new Error(error);
    }
};