import { FETCH_DATA,  SET_ERRORS, SET_LOADING, STOP_LOADING } from './actionTypes';
import axios from 'axios';

export const fetchData = () => dispatch => {
    dispatch({type: SET_LOADING});

    return axios.get("https://api.jsonbin.io/b/5f7d3ff8302a837e95760fea")
        .then(res => {
            dispatch({
                type: FETCH_DATA,
                payload: res.data.books
            });
            dispatch({type: STOP_LOADING})
        })
        .catch(err =>{
            dispatch({
                type: SET_ERRORS,
                payload: 'No Data found'
            })
        })
}