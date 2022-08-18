import { fetchAwards } from "../utils/requests"
// import { getOrderedArray } from "./getOrderedArray";

/* Функция получает только те награды, которые фильм выиграл */
/* Юля */

export const getAwards = async(id) => {
    const allAwards = await fetchAwards(id);
    let winAwards = allAwards.items.filter(e => {
            if (e.win === true) {
                return e
            }
        })
        /* return getOrderedArray(winAwards); */
    return winAwards;
}