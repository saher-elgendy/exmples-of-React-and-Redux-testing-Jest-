import { combineReducers } from 'redux';
import bagReducer from './reducers/bagReducer';
import  dataReducer  from './reducers/dataReducer';

export default combineReducers({
    data: dataReducer,
    bag: bagReducer
})