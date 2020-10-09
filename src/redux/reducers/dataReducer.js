import { FETCH_DATA, SET_LOADING, STOP_LOADING, SET_ERROR } from '../actionTypes';


let initialState = {
    loading: false,
    error: null,
    books: []
}

export default (state = initialState, action) => {
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
        case SET_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

