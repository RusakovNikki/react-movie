/*Из API приходит string, внутри которого куча ненужных HTML тегов, функция их убирает.*/

export const cutOutTags = (str) => {
    var regex = /( |<([^>]+)>)/ig,
        result = str.replace(regex, " ");
    return result;
}