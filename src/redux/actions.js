import {
    FETCH_DATA,
    SET_ERROR,
    SET_LOADING,
    STOP_LOADING,
    ADD_BOOK,
    REMOVE_BOOK
} from './actionTypes';
import axios from 'axios';


export const fetchData = () => dispatch => {
    dispatch({ type: SET_LOADING });

    return axios.get("https://api.jsonbin.io/b/5f7d3ff8302a837e95760fea")
        .then(res => {
            dispatch({
                type: FETCH_DATA,
                payload: res.data.books
            });
            dispatch({ type: STOP_LOADING })
        })
        .catch(err => {
            dispatch({
                type: SET_ERROR,
                payload: 'Something went wrong'
            })
        })
}


/*bag */

export const addBookToBag = (book) => (dispatch, getState) => {
    const bag = getState().bag;
    const newBag = [...bag];
    const index = newBag.findIndex(b => b.cover === book.cover);

    if (index < 0) {
        return dispatch({
            type: ADD_BOOK,
            payload: [...newBag, book]
        })
    }
}

export const removeBookFromBag = book => (dispatch, getState) => {
    const bag = getState().bag;
    const newBag = [...bag];

    return dispatch({
        type: REMOVE_BOOK,
        payload: newBag.filter(b => b.cover !== book.cover)
    })
}

