import { fetchData } from "../../utils/requests";

export const getPremiers = async(url) => {
    const premiers = await fetchData(url);
    // console.log('GetPremiers: ', premiers.items.slice(0, 15));
    return premiers.items.slice(0, 15);
}