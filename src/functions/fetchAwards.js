import { getAwards } from "../utils/api"
import { getOrderedArray } from "./getOrderedArray";

export const fetchAwards = async (id) => {
    const allAwards = await getAwards(id);
    let winAwards = allAwards.items.filter(e => {
        if (e.win === true) {
            return e
        }
    })
    /* return getOrderedArray(winAwards); */
    return winAwards;
}