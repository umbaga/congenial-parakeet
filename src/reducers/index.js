import {combineReducers} from 'redux';
import session from './sessionReducer';
import itemtypes from './itemtypeReducer';

const rootReducer = combineReducers({
    itemtypes,
    session
});

export default rootReducer;