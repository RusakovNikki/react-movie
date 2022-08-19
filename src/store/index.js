import { applyMiddleware, combineReducers, createStore } from 'redux';
import { isSearchReducer } from './reducers/isSearchReducer';
import { addFilmsreducer } from './reducers/addFilmsreducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

/* Стор для Redux */
/* Никита */

const rootReducer = combineReducers({
    isSearchReducer,
    addFilmsreducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
