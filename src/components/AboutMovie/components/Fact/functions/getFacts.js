import { fetchData } from '../../../../../utils/requests';
import { cutOutTags } from './cutOutTags';
/*Функция получает только 5 фактов (API возвращает по 25+)*/
/* Юля */

export const getFacts = async(path) => {
    let counter = 1;
    const facts = await fetchData(path);
    return facts.items.slice(0, 5).map(item => {
        return `${counter++}. ` + cutOutTags(item.text);
    });
}