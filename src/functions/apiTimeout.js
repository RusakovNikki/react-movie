/* Замедление api запросов */
/* Возможно, больше не нужна, либо Никите для сролла, так как там если чуть быстрее покрутить, приложение падает (Юля) */

export const apiTimeout = (i) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            return resolve();
        }, 100 * i);
    });
};