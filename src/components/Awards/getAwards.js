// import { getOrderedArray } from "./getOrderedArray";

import { fetchAwards } from '../../utils/requests';

/* Функция получает только те награды, которые фильм выиграл */
/* Юля */

export const getAwards = async (id) => {
    const allAwards = await fetchAwards(id);
    let winAwards = allAwards.items.filter(e => {
        if (e.win === true) {
            return e
        }
    })
    /* return getOrderedArray(winAwards); */
    return winAwards;
}