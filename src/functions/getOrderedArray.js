export const getOrderedArray = (arr) => {
    let orderedArray = arr.reduce((prev, item) => {
        prev[item.name] = prev[item.name] || [];
        prev[item.name].push(item);
        return prev;
    }, {});

    Object.keys(orderedArray).forEach(key => {
        let name = orderedArray[key].name;
        let nominationName = orderedArray[key].nominationName;
        console.log('Name: ', name, 'Nomination: ', nominationName);
    })
    return orderedArray;
}