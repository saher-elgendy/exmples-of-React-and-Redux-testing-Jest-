import { FETCH_DATA, LOADING, SET_LOADING, STOP_LOADING, SET_ERRORS } from './actionTypes';


let initialState = {
    loading: false,
    errors: null,
    books: []
}

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                books: action.payload
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case STOP_LOADING:
            return {
                ...state,
                loading: false
            }
        case SET_ERRORS:
            return {
                ...state,
                errors: action.payload
            }
        default:
            return state;
    }
}