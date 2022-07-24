import { getTrailers } from "../utils/api";

/*Функция возвращает только трейлеры с YouTube. API возвращает 10+ различных видео (Youtube или виджет Кинопоиска).
Позже заметила, что не у всех фильмов есть трейлер с YouTube, потом доработаю функцию.*/

export const fetchTrailer = async (id) => {
    const trailers = await getTrailers(id);
    const trailer = trailers.items.find(item => {
        return item.site === 'YOUTUBE';
    });
    return `https://www.youtube.com/embed/${trailer.url.substring(trailer.url.length - 11)}`;
}