import { getTrailers } from "../utils/api";

export const fetchTrailer = async (id) => {
    const trailers = await getTrailers(id);
    const trailer = trailers.items.find(item => {
        return item.site === 'YOUTUBE';
    });
    return `https://www.youtube.com/embed/${trailer.url.substring(trailer.url.length - 11)}`;
}