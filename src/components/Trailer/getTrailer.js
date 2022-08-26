import { fetchData } from '../../utils/requests';

/* Функция возвращает только трейлеры с YouTube. API возвращает 10+ различных видео (Youtube или виджет Кинопоиска).
Позже заметила, что не у всех фильмов есть трейлер с YouTube, потом доработаю функцию. */
/* Юля */

export const getTrailer = async(url) => {
    const trailers = await fetchData(url);
    const trailer = trailers.items.find(item => {
        return item.site === 'YOUTUBE';
    });

    /* url тоже иногда с сервера не возвращается, нужна какая-то проверка на то что url не пустой  (Настя) */
    /*Чуть позже, возможно, уберу ютуб и будем вставлять виджет кинопоиска, там обычно всегда есть трейлер, сейчас же половина ссылок не работает (Юля)*/
    return `https://www.youtube.com/embed/${trailer.url.substring(trailer.url.length - 11)}`;
}