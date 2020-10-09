import { ADD_BOOK, REMOVE_BOOK } from './../actionTypes';


export default (state = [], action) => {
    switch (action.type) {
        case ADD_BOOK:
            return action.payload;

        case REMOVE_BOOK:
            return action.payload;

        default:
            return state;
    }
}