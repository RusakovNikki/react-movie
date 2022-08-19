const defaultState = {
    filmItems: []
}
/* Редьюсер для вывода всех фильмов */
const ADD_FILMS = 'ADD_FILMS'

export const addFilmsreducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_FILMS:
            return {...state, filmItems: [...state, ...action.payload]}
        default:
            return state
    }
}

export const addFilmAction = (payload) => ({ type: ADD_FILMS, payload })