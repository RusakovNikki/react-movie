/* Замедление api запросов */

const apiTimeout = (i) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            return resolve();
        }, 100 * i);
    });
};

export default apiTimeout