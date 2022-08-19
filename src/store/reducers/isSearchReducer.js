const defaultState = {
    search: false,
}
/* Редьюсер, отвечающий за состояние: производится ли поиск или нет */

const IS_SEARCHING = 'IS_SEARCHING'
const NOT_SEARCHING = 'NOT_SEARCHING'


export const isSearchReducer = (state = defaultState, action) => {
    switch (action.type) {
        case IS_SEARCHING:
            return { ...state, search: true }
        case NOT_SEARCHING:
            return { ...state, search: false }
        default:
            return state
    }
}

export const isSearchingAction = () => ({ type: IS_SEARCHING })
export const isNotSearchingAction = () => ({ type: NOT_SEARCHING })