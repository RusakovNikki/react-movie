/* Функция для того, чтобы сократить длину описания на ховер, так как иначе оно слишком длинное и закрывает другие фильмы */

export const getShortDesc = (desc) => {
    if (desc && desc.length > 140) return `${desc.substring(0, 140)}...`;
}