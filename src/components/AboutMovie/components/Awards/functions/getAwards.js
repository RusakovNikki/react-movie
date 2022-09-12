// import { getOrderedArray } from "./getOrderedArray";

import { fetchData } from '../../../../../utils/requests';

/* Функция получает только те награды, которые фильм выиграл */
/* Юля */

export const getAwards = async(url) => {
    const allAwards = await fetchData(url);
    let winAwards = allAwards.items.filter(e => {
            if (e.win === true) {
                return e
            }
        })
        /* return getOrderedArray(winAwards); */
    return winAwards;
}