//Функция для получения рандомного идентификатора (можно задать range). Используется для заполнения параметра key.

export const getRandomId = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}