export const cutOutTags = (str) => {
    var regex = /( |<([^>]+)>)/ig,
        result = str.replace(regex, " ");
    return result;
}