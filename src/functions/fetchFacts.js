import { getFacts } from "../utils/api"
import { cutOutTags } from "./cutOutTags";

/*Функция получает только 5 фактов (API возвращает по 25+)*/

export const fetchFacts = async (id) => {
    let counter = 1;
    const facts = await getFacts(id);
    return facts.items.slice(0, 5).map(item => {
        return `${counter++}. ` + cutOutTags(item.text);
    });
} 