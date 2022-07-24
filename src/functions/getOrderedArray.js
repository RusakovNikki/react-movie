export const getOrderedArray = (arr) => {
    let orderedArray = arr.reduce((prev, item) => {
        prev[item.name] = prev[item.name] || [];
        prev[item.name].push(item);
        return prev;
    }, {});
    return orderedArray;
}

/*Эта функция мне нужна, чтобы потом упорядочить массив с наградами из API для последующей группировки, не удаляйте. (Юля)*/